const express = require('express');
const app = express();
const compression = require('compression')
const helmet = require('helmet');

const path = require('path');
const port = process.env.PORT || 5000;

const database = require('./database.js');
const exercises = database.exercises;

app.use(helmet());
app.use(compression());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/', (req, res) => {
    try{
        let correspondData = [];

        if(req.body.muscules === 'all'){
            for (let i = 0; i < exercises.length; i++){
                correspondData.push(exercises[i]);
            }
        }else{
            for(let i = 0; i < req.body.muscules.length; i++){
                for(let j = 0; j < exercises.length; j++){
                    if(exercises[j].muscules.includes(req.body.muscules[i])){

                        const element = exercises[j];

                        if(correspondData.includes(element)){
                            continue;
                        }

                        correspondData.push(element);
                    }
                }
            }
        }

        const toSend = [];

        let calories = 0;
        let times = 0;

        if(req.body.intencivity.toLowerCase() === 'low'){
            calories = 200;
            times = 8;
        }else if(req.body.intencivity.toLowerCase() === 'medium'){
            calories = 350;
            times = 10;
        }else{
            calories = 500;
            times = 12;
        }

        if(req.body.gender.toLowerCase() !== 'female'){
            calories *= 1.1;
        }

        if(req.body.times < 3){
            calories *=1.1;
        }

        while(calories > 0){
            const random = Math.floor(Math.random() * correspondData.length);
            const chosen = correspondData.splice(random, 1);

            const element = chosen[0];

            element['difficulty'] = Math.floor(Math.random() * 5) + 1;
            element['sets'] = 4;
            element['times'] = times; 
            element['calories'] = Math.floor(Math.random() * 3) + 1;

            if(element.calories === 1){
                element.times = Math.floor(element.times * 1.5);
                element['difficulty'] = Math.floor(Math.random() * 3) + 1;
            }

            calories -= element.calories * element.sets * element.times;

            toSend.push(chosen[0]);
        }

        let additional = [];

        if(correspondData.length > 25){
            for(let i = 0; i < 25; i++){
                const random = Math.floor(Math.random() * correspondData.length);
                const chosen = correspondData.splice(random, 1);

                const element = chosen[0];

                element['difficulty'] = Math.floor(Math.random() * 5) + 1;
                element['sets'] = 4;
                element['times'] = times; 
                element['calories'] = Math.floor(Math.random() * 3) + 1;

                if(element.calories === 1){
                    element.times = Math.floor(element.times * 1.5);
                    element['difficulty'] = Math.floor(Math.random() * 3) + 1;
                }

                additional.push(element);
            }
        }else{
            additional = correspondData;
        }


        const data = JSON.stringify([toSend, additional]);

        res.status(200).send(data);
    }catch(err){
        res.status(405).send(err.message);
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));