const exercises = [
{
    id: '001',
    name: 'Standing Dumbbell Curl',
    muscules: ['biceps',],
    description: 
                `Stand holding a dumbbell in each hand with your arms hanging by your sides.\n
                Ensure your elbows are close to your torso and your palms facing forward.\n
                Keeping your arms stationary, exhale as you curl the weights up to shoulder level while contracting your biceps.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '002',
    name: 'Hammer Curl',
    muscules: ['biceps',],
    description: 
                `Let a pair of dumbbells hang at arm’s length next to your sides with your palms facing your thighs.\n
                Don’t move your arms. Instead, bend your elbows and curl the dumbbells as close to your shoulders as possible.\n
                Pause at the top – remember to squeeze – before slowly lowering the weight back to the starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '003',
    name: 'Incline Dumbbell Curl',
    muscules: ['biceps',],
    description: 
                `Start by lying with your back against a bench that is set to a 45-degree incline.\n
                Bend your elbows and curl the dumbbells as close to your shoulders as you can.\n
                Next, lower the weight (slowly) back to your starting position, ensuring you completely straighten your arms.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '004',
    name: 'Zottman Curl',
    muscules: ['biceps',],
    description: 
                `With your dumbbells hanging by your side, turn your arms so your palms face forward.\n
                Without moving your upper arms, bend your elbows and curl the dumbbells towards your shoulder.\n
                Pause, then rotate the dumbbells so your palms face forward before slowly returning back to your starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '005',
    name: 'Decline Dumbbell Curl',
    muscules: ['biceps',],
    description: 
                `Lie chest down against a bench that’s set to a 45-degree incline. Bend your elbows – don’t move your 
                upper arms – and curl the dumbbells up to your shoulders.\n
                Pause, then lower back to the start position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '006',
    name: 'Barbell Bent-over Row',
    muscules: ['biceps',],
    description: 
                `With slightly flexed knees, hinge over from the hips.\n
                Maintain a neutral spine with your hands shoulder-width apart.\n
                Think about pulling your elbows behind you and hold for one second before controlling the load back down.\n
                Ensure the line of the pull is into the belly button not into the sternum.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '007',
    name: 'Chin-up',
    muscules: ['biceps',],
    description: 
                `Grab the bar with your palms facing towards you and a grip that is narrows than shoulder width.\n
                Pull yourself up until your head is above the bar. Slowly lower back to the start position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '008',
    name: 'Regular EZ Bar Curl',
    muscules: ['biceps',],
    description: 
                `Hold the EZ bar in front of your thighs with an underhand, shoulder-width grip.\n
                As you breathe in, curl the bar until your hands are at your shoulders.\n
                Squeeze your bicep then lower under control.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '009',
    name: 'Underhand Seated Row',
    muscules: ['biceps',],
    description: 
                `Bend your knees and hold the bar with an underhand grip, shoulder-width apart.\n
                Lean slightly, keeping your back straight, then use your back to muscle to drive the bar towards your belly button.\n
                Return the bar to the starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '010',
    name: 'Reverse Curl Straight Bar',
    muscules: ['biceps',],
    description: 
                `Stand and grip a barbell at shoulder width with an overhand grip.\n
                Flex the elbows and rotate the barbell upwards, only using your forearms, 
                until your palms face out and the barbell is in line with your shoulders.\n
                Return it back down slowly and repeat.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '011',
    name: 'Close-grip Bench Press',
    muscules: ['triceps',],
    description: 
                `Grasp a barbell with an overhand grip that’s shoulder-width apart, 
                and hold it above your sternum with arms completely straight.\n
                Lower the bar straight down, pause, and then press the bar back up to the starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '012',
    name: 'Rope Tricep Pushdown',
    muscules: ['triceps', 'latissimus'],
    description: 
                `Attach a rope handle to the high pulley of a cable station. 
                Bend your arms and grab the bar with an overhand grip, your hands shoulder-width apart. 
                Tuck your upper arms next to your sides.\n
                Without moving your upper arms, push the bar down until your elbows are locked. Slowly return to the starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '013',
    name: 'Tricep Dips',
    muscules: ['triceps',],
    description: 
                `Bend your knees and cross your ankles. Slowly lower your body until your shoulder joints are below your elbows.\n
                Push back up until your elbows are nearly straight but not locked. If you have shoulder issues, skip this move.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '014',
    name: 'Overhead Triceps Extension',
    muscules: ['triceps',],
    description: 
                `Sit on a bench and grab one dumbbell. Form a diamond shape with both hands to grip the top end of the weight. 
                Raise the dumbbell over your head, keeping your elbows up and your core tight.\n
                Lower the dumbbell down the top of your back by bending at the elbow, maintaining your strong chest and keeping your shoulders still.\n
                Raise the weight by fully extending your arms, pausing for a count to squeeze at the top of the movement.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '015',
    name: 'Skullcrushers',
    muscules: ['triceps',],
    description: 
                `Grip the EZ bar on the inner grips using an overhand grip and extend your arms straight up.\n
                Keeping your elbows fixed and tucked in, slowly lower the bar until it is about an inch from your forehead. 
                Always keep your upper arms perpendicular to the floor.\n
                Slowly extend your arms back to the starting position without locking your elbows.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '016',
    name: 'The Diamond Press-up',
    muscules: ['triceps', 'latissimus', 'pectoral'],
    description: 
                `Lower yourself down into a standard plank or press-up position. 
                Bring your hands close to each other at chest level, with your thumbs touching one another and your forefingers touching. 
                Your spine should be straight, and your core and glutes should be squeezed tight.\n
                Lower yourself down to the floor. Pause, maintaining the squeeze in your core and glutes, 
                then push back up to the original position by straightening your arms.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '017',
    name: 'Bench Dip',
    muscules: ['triceps',],
    description: 
                `Stand facing away from a bench, grab it with both hands at shoulder-width.\n
                Extend your legs out in front of you. Slowly lower your body by flexing at the elbows 
                until your arm at forearm create a 90-degree angle.\n
                Using your triceps lift yourself back to the starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '018',
    name: 'Dumbbell Floor Press',
    muscules: ['triceps',],
    description: 
                `Grab a dumbbell with each hand and lie with your back on the ground.\n
                Hold the dumbbells overhead and bend your arm to lower the kettlebells.\n
                Touch your elbows to the ground, pause, then press them back up.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '019',
    name: 'The Classic Press-up',
    muscules: ['triceps', 'latissimus'],
    description: 
                `Set up with your weight supported on your toes and hands beneath your shoulders, body straight. 
                Take care to keep you core locked so a straight line forms between your head, glutes and heels.\n
                Lower your body until your chest is an inch from the ground then explosively drive up by fully extending your arm`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '020',
    name: 'One Arm Kettlebell Floor Press',
    muscules: ['triceps',],
    description: 
                `Lie on the floor and hold a kettlebell in one hand, with your upper arm being supported by the floor.\n
                Extend your arm and press the kettlebell straight up toward the ceiling. That's one rep. Lower the kettlebell and repeat.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '021',
    name: 'Towel-grip Dead Hang',
    muscules: ['forearms',],
    description: 
                `Towels are a great way to intensify your grip training without needing to add external loads to your body.\n
                Aim to be able to hold yourself for 30 seconds at first. Once you can get to 60 or more seconds, you’re a forearm freak show!`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '022',
    name: 'Dumbbell Zottman Curl',
    muscules: ['forearms',],
    description: 
                `Lower your weights slowly, taking 3 to 5 seconds on the lowering phase of the exercise, to incur the most muscle damage on those forearms. 
                This will max out your muscle and strength gains.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '023',
    name: 'Palm Plank Lift',
    muscules: ['forearms',],
    description: 
                `Get in a plank position with your palms on the ground, squeezing your core and glutes. Press into the ground and lift yourself up on your right hand, 
                shifting your weight to your left. Lower your palm back to the ground, then repeat the movement on your left side.\n
                Keep that up for 40 seconds, then rest for 20 seconds as part of the above workout, or perform 3 sets of 15 to 20 reps.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '024',
    name: 'Grip Buster Curl',
    muscules: ['forearms', 'biceps'],
    description: 
                `Using a pair of light-to-medium weight dumbbells, perform a standard dumbbell curl with both hands simultaneously. At the bottom of each rep, 
                retract your wrists and pause for a count, holding the weights at an angle, then contract back into a standard starting position. `,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '025',
    name: 'Suitcase Carry',
    muscules: ['forearms',],
    description: 
                `Keep your spine straight and squeeze your core, making sure not to overcompensate for the weighted side of your body. 
                Walk 25 yards, then turn around and walk 25 yards back to the start.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '026',
    name: 'Overhead Carry',
    muscules: ['forearms',],
    description: 
                `Keep your spine straight and squeeze your core, making sure not to overcompensate for the weighted side of your body. 
                Don't allow your unloaded shoulder to slump. 
                Walk 25 yards, then turn around and walk 25 yards back to the start. `,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '027',
    name: "Farmer's Carry",
    muscules: ['forearms', 'trapezius'],
    description: 
                `Keep your spine straight and squeeze your core. Walk 25 yards, then turn around and walk 25 yards back to the start.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '028',
    name: 'Flexed Arm Carry',
    muscules: ['forearms',],
    description: 
                `Grab some medium-weight dumbbells with an overhand grip and hoist them to a position with a 90-degree bend in your elbow. 
                Walk 25 yards, then turn around and walk 25 yards back to the start.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '029',
    name: 'Towel Grip Inverted Row',
    muscules: ['forearms',],
    description: 
                `Now, grip them to hang from beneath a low bar setup, holding a plank posture with your heels down on the ground. 
                Pull your chest up to the bar, maintaining your posture, then return to the starting position. `,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '030',
    name: 'Barbell Overhead Shoulder Press',
    muscules: ['shoulder',],
    description: 
                `To start, put your feet at shoulder-width, and tighten your core as you hold a barbell at your shoulders, palms facing forward. 
                Next, push the bar upward and squeeze your shoulder blades together at the peak. Lower steadily and carefully.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '031',
    name: 'Seated Dumbbell Shoulder Press',
    muscules: ['shoulder', 'trapezius', 'rhomboid', 'scapula'],
    description: 
                `To perform a seated dumbbell shoulder press, sit on a low-back bench and hold a dumbbell in each hand at the shoulder level, palms facing forward. 
                Keeping your head and spine perfectly straight, lift the dumbbells overhead toward one another, stopping just short of having them touch at the top. 
                Hold the position for a few seconds and then carefully reverse course. Repeat.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '032',
    name: 'Front Raise',
    muscules: ['shoulder',],
    description: 
                `To execute, keep your hands at hip height as you hold the weight in front of you. 
                Your feet should be even with your shoulders and your core should be tight. Next, 
                retract your shoulder blades and keep your arms straight as you lift the weight to shoulder level. 
                Breathe steadily and lower the weight carefully. Repeat.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '033',
    name: 'Reverse Pec Deck Fly',
    muscules: ['shoulder',],
    description: 
                `This exercise targets your posterior delts and requires a pec deck machine. 
                To start, face the machine, and position the seat so that the handles are at shoulder level on either side. 
                Next, hold the handles with your palms facing inward. 
                Tighten your torso and extend your arms out to the side, pushing through all the way. Responsibly return to the starting position. Repeat`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '034',
    name: 'Bent-Over Dumbbell Lateral Raise',
    muscules: ['shoulder', 'trapezius'],
    description: 
                `You can perform it in either a standing (bent-over) or seated position. Start with a dumbbell in each hand, 
                keeping your chest up, your back flat, your knees slightly bent, and your eyes focussed toward a fixed point on the floor. 
                Now, bend over until your core is basically parallel with the ground, and hang the dumbbells directly underneath you, 
                all while keeping your elbows in a slightly bent position. Next, raise both dumbbells up and out to your sides, 
                forming an arc until your upper arms are even with your torso. 
                Take a brief pause at the top before lowering the dumbbells back into starting position. Repeat.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '035',
    name: 'Push Press',
    muscules: ['shoulder',],
    description: 
                `The push press should be performed in the standing position. 
                Start by resting the barbell atop your upper chest, with your palms up, your elbows pointed out, and your upper arms parallel to the floor. 
                Lower your hips and bend your knees into a quarter squat and then rise upwards with ample thrust, 
                fully extending your arms and elbows as you lift the bar over your head. 
                Hold for a few seconds before returning to the starting position for the next rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '036',
    name: 'Reverse Cable Crossover',
    muscules: ['shoulder', 'scapula', 'rhomboid', 'trapezius'],
    description: 
                `You’ll need to attach D-handles to the upper pulley of two cable machines for this popular shoulder gym exercise. 
                Grab the handle from the machine on your right using your left hand, and vice versa. Draw the cables in so that they form a cross on your chest, 
                keeping your elbows fixed and your arms even with your shoulders. Slightly lean forward before lifting the weights on each respective machine 
                in a cross-like fashion, stretching your arms as far as the cables go before bringing them in. 
                If possible, increase the weight with each subsequent set.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '037',
    name: 'One-Arm Cable Lateral Raise',
    muscules: ['shoulder', 'scapula', 'rhomboid', 'trapezius'],
    description: 
                `To start, stand sideways to the cable machine, keeping your feet shoulder-width apart. 
                Using the hand that’s opposite the pulley, grab the D-handle. 
                With your abs tight and your shoulders back, raise the cable using just the motion of your arms and shoulders. 
                Take your arm just past shoulder level and hold for a few seconds before slowly returning to the original position. 
                Repeat as necessary and then switch sides. Your hand and elbow should move in conjunction with one another the entire time.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '037',
    name: 'One-Arm Cable Lateral Raise',
    muscules: ['shoulder',],
    description: 
                `To start, stand sideways to the cable machine, keeping your feet shoulder-width apart. 
                Using the hand that’s opposite the pulley, grab the D-handle. 
                With your abs tight and your shoulders back, raise the cable using just the motion of your arms and shoulders. 
                Take your arm just past shoulder level and hold for a few seconds before slowly returning to the original position. 
                Repeat as necessary and then switch sides. Your hand and elbow should move in conjunction with one another the entire time.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '038',
    name: 'Standing Barbell Shrugs',
    muscules: ['shoulder', 'rhomboid', 'trapezius'],
    description: 
                `Keeping your feet even with your shoulders, bend your knees and pick up the barbell, bringing it to waist level. 
                Next, lift your shoulders up and back (i.e. “shrug” or pinch them), squeezing for about five seconds before releasing them. 
                Keep the movements restricted to your shoulders, meaning your arms should be relatively 
                loose and the barbell should only raise and lower very slightly.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '039',
    name: 'Face Pull',
    muscules: ['shoulder', 'rhomboid', 'trapezius'],
    description: 
                `Set the cable machine or resistance band at a roughly eye-level height. 
                Grab the cable rope handles or the ends of the band in each hand in an underhand grip. 
                Squeeze your shoulder blades to pull toward your face, keeping your elbows high and resisting the urge to lean forward. 
                Pause to squeeze once you pull back as far as you can, then control the cable/bands back to the starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '040',
    name: 'Bent Over Y',
    muscules: ['scapula', 'rhomboid', 'trapezius'],
    description: 
                `Stand with your feet shoulder-width apart, holding light dumbbells with your thumbs facing up. 
                Hinge at the hip to assume a bent over position. Raise your arms in front of you forming the shape of the letter Y, 
                holding the position for a beat. slowly return to the starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '040',
    name: 'Pullup Shrug',
    muscules: ['trapezius'],
    description: 
                `Hang from a pullup bar, keeping your spine aligned and core tight. 
                Pull your shoulders back and down to extend your head and neck upward. 
                Hold for a count, then lower yourself back into the starting position. `,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '041',
    name: 'Pullup Shrug',
    muscules: ['trapezius'],
    description: 
                `Hang from a pullup bar, keeping your spine aligned and core tight. 
                Pull your shoulders back and down to extend your head and neck upward. 
                Hold for a count, then lower yourself back into the starting position. `,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '042',
    name: 'Rack Pull',
    muscules: ['trapezius', 'rhomboid'],
    description: 
                `Set up a rack or boxes so the barbell is elevated above your shins. 
                Grab the bar at around shoulder-width with an overhand grip. 
                Hinge at the waist and push your hips back and feet through the floor, pulling the bar up and keeping your back straight. 
                Pause for a count at the top, then control the weight back down into place.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '043',
    name: 'Dumbbell Shrug',
    muscules: ['trapezius', 'rhomboid'],
    description: 
                `Grab a pair of dumbbells and let them hang at arm’s length next to your sides, your palms facing each other. 
                Shrug your shoulders as high as you can.\n
                Imagine that you’re trying to touch your shoulders to your ears without moving any other parts of your body. 
                Pause in the up position, then slowly lower the weights back to the start`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '044',
    name: 'Incline Dumbbell Shrug',
    muscules: ['trapezius', 'rhomboid'],
    description: 
                `Grab a pair of dumbbells and lie chest-down on a 45-degree incline bench.\n
                Let your arms hang straight down, palms facing each other. 
                Now shrug your shoulders up while pulling your shoulder blades together. Pause, and then reverse the movement.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '045',
    name: 'Dumbbell Jump Shrug',
    muscules: ['trapezius',],
    description: 
                `Grab a pair of dumbbells and bend at your hips and knees. 
                Let the weights hang at arm’s length just below your knees, your palms facing your sides. Don’t round your lower back.\n
                Simultaneously thrust your hips forward, shrug your shoulders forcefully, and jump as high as you can. 
                Land as softly as possible, and reset.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '046',
    name: 'Barbell Behind-the-Back Shrug',
    muscules: ['trapezius', 'rhomboid'],
    description: 
                `This exercise is the same as a barbell shrug, except you're holding the weight behind your body.\n
                Grab the bar with an overhand grip so your palms are facing away from you, and your hands are shoulder-width apart.\n
                Let the bar hang at arm's length at your glutes, and then shrug your shoulders toward your ears as high as you can. 
                Pause, then reverse the movement.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '047',
    name: 'Barbell Row',
    muscules: ['scapula', 'latissimus'],
    description: 
                `Grab the barbell with an overhand grip that’s just beyond shoulder width, and hold it at arm’s length. 
                Bend at your hips and knees and lower your torso until it’s almost parallel to the floor. Keep your back naturally arched.\n
                Pull the bar to your upper abs and squeeze your shoulder blades toward each other. 
                Pause, then slowly lower the bar back to the starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '048',
    name: 'Snatch-Grip Barbell High Pull',
    muscules: ['shoulder', 'trapezius', 'rhomboid'],
    description: 
                `Load the barbell with a light weight. Grab the bar with a wide overhand grip and let it hang at arm's length in front of your body. 
                Your hands should be a few inches from the weight plates. 
                Bend at your hips and knees to squat down. Your lower back should be naturally arched.\n
                Pull the bar as high as you can by explosively standing up as you bend your elbows and raise your upper arms. 
                You should rise up on you toes. Reverse the movement to return to the starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '049',
    name: 'Overhead Barbell Shrug',
    muscules: [ 'trapezius', 'rhomboid'],
    description: 
                `Hold a barbell above your head with an underhand grip that’s about twice shoulder width. 
                You arms should be completely straight, and your feet shoulder be shoulder-width apart.\n
                Lock your elbows and keep them that way. Shrug your shoulders, 
                trying to raise the tops of your shoulders as close to your ears as possible.\n
                Pause, then reverse the movement back to the starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '050',
    name: 'Dumbbell Overhead Carry',
    muscules: [ 'trapezius',],
    description: 
                `Grab a pair of dumbbells and press them over your head, palms facing each other. 
                Your upper arms should be next to your ears. Walk forward.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '051',
    name: 'Scaption',
    muscules: [ 'trapezius', 'rhomboid', 'scapula'],
    description: 
                `Standing with your feet shoulder-width apart, hold a pair of dumbbells at arm’s length next to your sides. 
                Your palms should be facing each other and your elbows slightly bent. Stand as tall as you can.\n
                Without changing the bend in your elbows, raise your arms at a 30-degree angle to your body (so that they form a Y) 
                until they’re at shoulder level. The thumb sides of both hands should be facing up.\n
                Pause, then slowly lower the weights back to the starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '052',
    name: 'Prone lateral raise',
    muscules: ['rhomboid',],
    description: 
                `Lie flat on your stomach on a mat or bench. Hold a light dumbbell in each hand. Place your forehead on the mat. 
                Keep your feet shoulder-width apart. Keep your arms extended and fully rested. Your palms should face in toward your body. 
                This is your starting position.\n
                Lift your arms up to your sides until your elbows are at shoulder height and your arms are parallel to the floor. 
                Exhale. Keep your arms perpendicular to your torso and fully extended through the movement.\n
                When you’ve reached shoulder height, squeeze your shoulder blades together and hold for one count. 
                Only your arms should be lifting up, nothing else. The goal is to isolate your upper back.
                Inhale, then slowly lower the dumbbells back down to the starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '053',
    name: 'Front raise thumbs up',
    muscules: ['rhomboid',],
    description: 
                `Lie down on your stomach on a mat or bench with your forehead resting down. Keep your feet shoulder-width apart. 
                Have your arms straight out above you, fully rested, with your thumbs up in the air. This is your starting position.\n
                Exhale and then raise your arms up straight. Keep them fully extended without lifting your head off the mat. 
                This is strictly a shoulder and upper-back exercise, so keep your torso and lower body glued to the mat.\n
                Squeeze the muscles between your shoulder blades as you lift up as high as you can without breaking form. 
                Hold this position for one count.
                Inhale and slowly lower yourself back down to your starting position with your arms fully rested.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '054',
    name: 'Deadlifts',
    muscules: ['latissimus', 'longissimus'],
    description: 
                `Load a barbell with weight on the ground and stand close to it, so it nearly touches your shins. 
                Grasp it with an overhand, slightly-wider-than-shoulder-width grip. 
                With feet shoulder-width apart and arms just outside of the legs, 
                push the hips back as far as possible then bend the knee far enough to reach the bar. 
                From the bottom position with a tall spine, pull the bar from the ground by standing tall and pulling the hips back to your 
                standing position. 
                Throughout the movement, it's important to maintain a strong posture. Descend down controlling the bar back down to the ground.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '055',
    name: 'Dumbbell Row',
    muscules: ['latissimus',],
    description: 
                `Start standing, holding a single dumbbell in your right hand. Now hinge forward until your torso is nearly parallel with the ground. 
                Keep your core tight and your feet shoulder-width apart as you do this. Place your left hand on a box or bench for balance. 
                This is the start. Pull the dumbbell back to just above your belly button, then slowly return it back to the start.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '056',
    name: 'Pull-ups',
    muscules: ['latissimus', 'shoulder', 'trapezius', 'rhomboid', 'biceps', 'triceps', 'pectoral', 'abdominal'],
    description: 
                `Hang from a pull-up bar with an overhand (pull-up) or underhand (chin-up) grip, hands about shoulder-width apart. 
                Keeping your core tight, bend at the elbows and shoulders and pull your chest to the bar. Pause, then lower with control.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '057',
    name: 'Lat Pulldowns',
    muscules: ['latissimus',],
    description: 
                `Sit in a lat pulldown station and grab the bar above with a grip slightly wider than shoulder-width. 
                Tighten your core and keep your torso upright. Pull the bar down toward your chest, 
                bending at your elbows and squeezing your shoulder blades. 
                Slowly return the bar to the top of the station. You can also try a kneeling variation, shown in the video above.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '058',
    name: 'Landmine Row',
    muscules: ['latissimus', 'trapezius', 'rhomboid'],
    description: 
                `Set a barbell in a landmine and place some weight on the opposite end of the barbell. 
                Wrap a V-bar handle around the weighted end and grasp its handles. 
                Hinge forward so your torso is at a 45-degree angle with the ground; this is the start. 
                Squeeze your shoulder blades and row the weighted end of the barbell toward your chest; pause, then return to the start.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '059',
    name: 'Dumbbell Pullover',
    muscules: ['pectoral', 'abdominal'],
    description: 
                `Lie with your back on a bench, holding a single dumbbell overhead with both hands, gripping the weight instead of the bar. 
                Keep your arms straight as you lower the weight in an arc behind your head. 
                Once you feel a stretch in your chest, pause, then pull it back to the starting position. 
                As you pull it back, your lats come into play, driving the motion.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '060',
    name: 'Meadows Row',
    muscules: ['latissimus'],
    description: 
                `Stand next to a landmine, facing away, your outside leg about 6 inches from the end of the barbell and your back leg in a 
                staggered stance behind you. Hinge forward so your torso is at a 45-degree angle to the ground, 
                and rest your outside hand on your outside leg. Grip the bar with an overhand grip with your inside hand. 
                Tighten your core. This is the start. Now row the bar to the bottom of your chest. Squeeze. Lower with control.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '061',
    name: 'Renegade Row',
    muscules: ['latissimus', 'pectoral', 'shoulder', 'triceps', 'scapula'],
    description: 
                `Get in pushup position, with your hands on a pair of dumbbells in a neutral grip, and your feet about shoulder-width apart. 
                Do a pushup. As you raise your torso, lift one dumbbell off the ground and row it toward your belly button; 
                you’ll need to support your weight with your other shoulder. 
                Return to the pushup position, then lift and row the other dumbbell. 
                Alternate the first dumbbell you row with during every pushup rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '062',
    name: 'Inverted Bodyweight Row',
    muscules: ['latissimus'],
    description: 
                `Lie under a barbell or Smith machine and grab the bar with an underhand grip slightly wider than shoulder-width. 
                Position your feet and torso so that you’re at a 45-degree angle with the ground. Squeeze your shoulder blades; this is the start. 
                Now pull your torso and body upwards, aiming to touch the bar between belly button and chest. Lower back to the start. That’s 1 rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '063',
    name: 'Deadstop Row',
    muscules: ['latissimus'],
    description: 
                `Setup for this is very similar to a barbell row. Once again, you stand next to a loaded barbell set on the ground. 
                Bend your knees slightly and hinge forward so your torso is slightly higher than parallel to the ground, then grab the barbell using an overhand, 
                shoulder-width grip. Look down, not forward. Tighten your core, and make sure your hips are slightly lower than your shoulders. 
                This is the start. Keeping your core tight and your shoulder blades squeezed, bend your elbows and pull the barbell to your lower chest. 
                Aim to keep your elbows at a 45-degree angle relative to your torso as you do this, and try to touch the bar to your ribcage. 
                Lower the barbell all the way to the ground, and let it come to rest (a dead stop) on the ground, then begin the next rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '064',
    name: 'Alternating Bird Dog',
    muscules: ['longissimus'],
    description: 
                `Kneel on a mat on all fours with your hands below your shoulders and your knees below your hips. 
                Raise your right arm straight out beside your head while you lift and extend your left leg out behind your body. 
                Lower both arm and leg to the floor to the starting position and repeat with your left arm and right leg. 
                Complete the movement without jerking. Alternate back and forth between left and right sides for the duration of the exercise.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '065',
    name: 'Barbell Deadlift',
    muscules: ['longissimus'],
    description: 
                `Place the barbell directly in front of you so that your feet are under the bar. 
                Squat down and grasp the bar in an overhand or mixed grip with your hands shoulder-width apart. 
                This is your starting position. Extend your hips and knees to lift the bar. 
                Do not use biceps to lift the bar or allow your shoulders to round out. Return to the starting position to complete one rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '066',
    name: 'Back Extension on Stability Ball',
    muscules: ['longissimus'],
    description: 
                `Use the back extension exercise to work the longissimus thoracis and other muscles of the erector spinae. 
                Lie face down on your exercise ball with your feet flat against the base of a wall. 
                Put your arms against your sides or clasp your hands behind your hips. Raise your torso off the ball by hyperextending your spine. 
                Lift up until your body forms a straight line from your shoulders to your knees. Return to the starting position for one rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '067',
    name: 'Superman',
    muscules: ['longissimus'],
    description: 
                `Lie face down on your exercise ball with your feet flat against the base of a wall. 
                Put your arms against your sides or clasp your hands behind your hips. Raise your torso off the ball by hyperextending your spine. 
                Lift up until your body forms a straight line from your shoulders to your knees. Return to the starting position for one rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '068',
    name: 'Barbell bench press',
    muscules: ['pectoral'],
    description: 
                `Position yourself on the bench with your feet firmly on the ground and your back flat 
                (the bar should be directly over your eyes, and your head, shoulders, and buttocks should be on the bench).\n
                Grasp the barbell with palms forward and thumbs wrapped around the bar. Move the bar into starting position, 
                with help from a spotter if needed.\n
                Position the bar over your chin or upper chest, keeping your elbows and wrists straight.\n
                Inhale and lower the bar slowly until it touches your chest below your armpits. As you lower, flare your elbows out slightly.\n
                Next, exhale and press the bar up, keeping your wrists straight and your back flat.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '069',
    name: 'Pec deck',
    muscules: ['pectoral'],
    description: 
                `Keep your feet flat on the floor, at least shoulder-width apart.\n
                With your back firmly against the seat, lift your arms until they reach shoulder level 
                (the angle of your elbows should be between 75 and 90 degrees). Place your elbows on the center of the pad on the wings of the machine.\n
                With smooth and slow movement, push the wings together, stopping just before they touch.\n
                Reverse to the starting position slowly.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '070',
    name: 'Bent forward cable crossover',
    muscules: ['pectoral'],
    description: 
                `Begin this exercise either with your feet planted hip-width apart, or with one in front of the other as if you are walking.\n
                Grasp the pulley handles with your arms straight out and facing inward, 
                making sure that your hands are below your shoulders and your elbows are bent a bit.\n
                Make your movements slow and controlled — no jerking — as you bring your hands together and extend your arms. 
                For a wider arc and more resistance, move your arms down first and then in toward each other to cross one hand over the other.\n
                Bring your arms slowly back to the starting position with control. Don’t let your arms go back past the shoulders.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '071',
    name: 'Chest press',
    muscules: ['pectoral'],
    description: 
                `Adjust the chest press bench so that you sit with knees bent slightly and your feet on the floor.\n
                Grasp the handles, and exhale as you push them away until your arms are straight out. Keep your elbows slightly bent.\n
                As you inhale, pull the bars toward you slowly and with control, without letting the weights touch down.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '072',
    name: 'Inclined dumbbell flies',
    muscules: ['pectoral'],
    description: 
                `Take a dumbbell in each hand and lie on a bench, feet firmly on the floor.\n
                Press your shoulders, back, head, and buttocks to the bench. 
                Position the dumbbells near your chest and armpits with your palms facing inward. Keep your wrists straight.\n
                Exhale, pull in your abs, and slowly press the dumbbells up directly above your chest. Your arms should be shoulder-width apart. 
                Keep your elbows straight but not locked.\n
                Inhale and lower the dumbbells slowly in a wide arc until they are level with your chest. Keep the dumbbells parallel.\n
                “Fly” the dumbbells toward the ceiling in the same gentle arc.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '073',
    name: 'Dips',
    muscules: ['pectoral'],
    description: 
                `Grasp the parallel dip bars firmly and lift your body.\n
                Keep your elbows straight, your head in line with your trunk, and your wrists in line with your forearms.\n
                Bring one leg across the other to stabilize the lower part of your body, and pull in your abs.\n
                Exhale, and bend your elbows to lower your body. Keep your elbows near your sides. 
                Your legs should be directly under your body to avoid tilting or swinging.\n
                Lower yourself until your elbows are at a 90-degree angle and your upper arms are parallel with the floor. Keep your wrists straight.\n
                Pause, and then straighten your elbows, pushing into the bars with your hands, and return to starting position. 
                Keep your body vertical and your wrists straight.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '074',
    name: 'Pushups',
    muscules: ['pectoral', 'latissimus', 'shoulder', 'biceps', 'triceps', 'trapezius'],
    description: 
                `Tighten your abdominals, keep your back flat, your neck in alignment with your spine, and keep your elbows close to your sides.\n
                With your hands directly under your shoulders, lower yourself slowly and with control.\n
                Lastly, press up.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '075',
    name: 'Assisted Reverse Side Situp',
    muscules: ['abdominal'],
    description: 
                `Start lying on left side, resting most of weight on left hip, with legs in the air at a 45-degree angle, 
                and place left forearm on the floor for support. 
                Bend knees as you bring them toward chest, and lift chest to meet them. Lower back to start.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '076',
    name: 'Bent Leg V-Up',
    muscules: ['abdominal'],
    description: 
                `Start lying on back with legs in air and bent at 90-degrees (shins parallel to floor) and hands clasped over chest. 
                In one movement, straighten legs and lift torso up, extending arms and trying to touch toes with hands. Lower back down to start. 
                That’s one rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '077',
    name: 'Alternating Toe Reach',
    muscules: ['abdominal'],
    description: 
                `Start lying on back with legs extended in air at 45-degree angle and arms straight out to sides on floor at shoulder level. 
                At the same time, raise right leg up and lift torso trying to touch toes with left hand. Return to start and repeat on the other side. 
                That’s one rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '078',
    name: 'Bicycle Crunch',
    muscules: ['abdominal'],
    description: 
                `Lie on the ground with one leg extended straight out and one leg bent with your knee pulled in towards your chest. 
                Both feet should not be touching the floor. Place your hands on the back of your head.\n
                Alternate bending and extending your legs, as if on a bicycle, while rotating opposite elbows towards the bent knee. 
                Be sure to focus on fully extending your straight leg out.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '079',
    name: 'Plank',
    muscules: ['abdominal'],
    description: 
                `Start on your hands and knees. Lower down so your elbows are on the floor, placing them directly underneath your shoulders. 
                Extend your legs out, coming up on your toes and lifting your body into a straight line.\n
                Squeeze your abs, glutes, and legs to stay in a straight line. 
                (Be sure not to let your hips lift up or sag down.) Hold for 60 seconds.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '080',
    name: 'Reverse Dumbbell Chop',
    muscules: ['abdominal'],
    description: 
                `Stand with feet hip width apart, knees bent into a half-squat, and hold the dumbbell in both hands to one side.\n
                While keeping your core tight, stand straight up and raise the weight over your opposite shoulder, twisting your torso as you lift.\n
                Bring the dumbbell back down, repeat for 30 seconds, and then switch sides.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '081',
    name: 'Reverse Crunch',
    muscules: ['abdominal'],
    description: 
                `Lie on the floor with knees bent and your hands underneath your glutes. 
                Hold your feet up just above the ground with your toes pointed.\n
                In one swift motion, bring your legs in towards your chest and push your feet up towards the ceiling, 
                lifting your glutes off the floor. Repeat for 60 seconds.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '082',
    name: 'Plank Jack',
    muscules: ['abdominal'],
    description: 
                `Get into a plank position with you hands slightly wider than your shoulders. 
                Make sure your legs are fully extended and rest on the balls of your feet.\n
                While keeping your upper body still, jump your legs out and then back in. Repeat for 30 seconds.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '083',
    name: 'Stability Ball Mountain Climber',
    muscules: ['abdominal'],
    description: 
                `Place your hands 18 to 24 inches apart on a stability ball, then bring legs back so you're in a push-up position. 
                (Your body should be in a straight line from head to toe.)\n
                Keeping core tight, bring right knee to chest, then return to start. Repeat with your left knee. 
                Continue alternating until you've done 10-12 reps on each leg, or complete as many as you can for 60 seconds.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '084',
    name: 'Flutter Kicks',
    muscules: ['abdominal'],
    description: 
                `Start lying down, hands by your sides, with your lower back pressed flat on the floor. 
                Keeping your core tight, lift legs slightly off the floor.\n
                Pointing your toes, bring one foot up, then the other, and repeat so they're fluttering 
                without feet ever touching the floor. Continue for 30 seconds.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '085',
    name: 'Standing Cross-Body Crunch',
    muscules: ['abdominal'],
    description: 
                `Stand with your legs shoulder-width apart. Keeping your left hand on your hip, 
                reach your right arm overhead to a slight diagonal from your head.\n
                With abs tight, lift your left knee to right elbow as you perform a standing crunch, 
                then return to the starting position. Repeat for 30 seconds, then switch sides and repeat.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '086',
    name: 'Plié Squat',
    muscules: ['buttock', 'anterior', 'posterior',],
    description: 
                `Start standing with feet wider than shoulders and turned out so inner thighs face forward, hands clasped in front of chest. 
                Tuck pelvis under and lower down into a wide-legged squat aiming to get thighs parallel to floor. Return back to start. 
                That's one rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '087',
    name: 'Squat and Lunge',
    muscules: ['buttock'],
    description: 
                `Start start standing with feet slightly wider than shoulders, 
                toes facing forward or slightly turned out, hands clasped in front of chest. 
                Lower down into a squat, making sure to keep your knees from passing your toes. 
                Rise back to stand, and then take a large step forward with your left foot and lower down into a lunge, 
                stopping when both legs form 90-degree angles. Keep right heel high. Return to start. That's one rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '088',
    name: 'Side-To-Side Squat Jump',
    muscules: ['buttock'],
    description: 
                `Start in a squat position with feet shoulder-width apart and hands clasped in front of chest. 
                Swing arms behind body for momentum and jump both feet as far to the right as possible, landing in a squat. 
                Jump back to starting position. That's one rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '089',
    name: 'Side-To-Side Squat Jump',
    muscules: ['buttock'],
    description: 
                `Start in a squat position with feet shoulder-width apart and hands clasped in front of chest. 
                Engage abs and step left foot out to the side, followed by right. 
                Reverse the movement to return to start. That’s one rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '090',
    name: 'Squat Pulse',
    muscules: ['buttock'],
    description: 
                `Start in a squat position with feet shoulder-width apart and hands clasped in front of chest. 
                Push through heels to raise hips and glutes up a couple inches, then lower back to start. That's one rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '091',
    name: 'Donkey Kick',
    muscules: ['buttock'],
    description: 
                `Start on all fours on the floor with wrists under shoulders and knees under hips. 
                Keeping hips level and right leg bent at 90 degrees, lift right toes toward ceiling until thigh is parallel to floor. 
                Reverse the movement to return to start. That's one rep.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '092',
    name: 'Side Shuffle Switch',
    muscules: ['anterior'],
    description: 
                `Stand with your feet together, arms by your sides.\n
                Shuffle swiftly to your right by taking three quick steps to the side (right, left, right), 
                and then lift your left knee up, swinging your right arm forward.\n
                Immediately reverse your shuffle (left, right, left) and land with your right knee up, 
                left knee bent, swinging your right arm forward.\n
                Repeat 20 times in a row as fast as you can, alternating sides.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '093',
    name: 'Plyometric Squat',
    muscules: ['anterior', 'posterior', 'medial', 'buttock'],
    description: 
                `Stand with your feet shoulder-width apart.\n
                Squat down, bending your knees to 90 degrees.\n
                Now jump up and land softly again in the squat position. Use the strength in your legs and butt to jump up explosively.\n
                Remember to land as softly as you can with your knees bent; keep your weight back, over your heels.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '094',
    name: 'Side Lunge Sweep',
    muscules: ['anterior', 'posterior', 'medial'],
    description: 
                `Stand with your feet together, hands on your hips.\n
                Take a wide step out to your left side and lower into a lunge, bending your left knee and pushing your hips behind you.\n
                Push through your left heel and stand back up, crossing your left leg in your front of your body without touching the floor. 
                Focus on squeezing your inner thighs as you cross your leg in front of your body.\n
                Swing your leg back out to the left side and repeat.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '095',
    name: 'The Single-Leg Circle',
    muscules: ['anterior', 'posterior', 'medial'],
    description: 
                `Lie back on the mat with your arms by your sides and your palms facing down.\n
                Begin by pointing with your left foot, as if reaching out with your toes toward the ceiling, and rotate your leg slightly outward.\n
                Inhale, and trace a circle on the ceiling with your left leg, moving your whole leg, but keeping your hips still. 
                Don't lift your left hip off the floor.\n
                Trace the circle on the ceiling 5 times in a clockwise direction. Repeat in a counter-clockwise direction.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '096',
    name: 'Dumbbell Squat',
    muscules: ['anterior', 'posterior',],
    description: 
                `Start standing with feet slightly wider than hip-width apart. Hold a dumbbell in each hand, racked over shoulders.\n
                Engaged core and sit hips back to lower into a squat. Keep chest tall and back flat and don't let knees move forward past toes. 
                Stop when thighs are parallel to the ground or when form is compromised.\n
                Press into the mid-foot to stand and return to start.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '097',
    name: 'Lunges with Dumbbells',
    muscules: ['anterior', 'posterior',],
    description: 
                `Stand with your feet hip-width apart, holding a 5- or 8-pound dumbbell in each hand.\n
                Lunge forward with your left leg, then straighten your leg. 
                When you lunge, your right knee should come to about an inch above the ground without touching it.\n
                Keep your torso perpendicular to the floor, with your weight evenly distributed between your legs. 
                Align your front knee over your front ankle, keeping the weight in your heels instead of on your toes.\n
                Continue these lunges for 30 seconds before switching sides and doing another 30 seconds on the other leg.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '098',
    name: 'Lunges with Dumbbells',
    muscules: ['anterior', 'posterior',],
    description: 
                `Stand with your feet hip-width apart, holding a 5- or 8-pound dumbbell in each hand.\n
                Lunge forward with your left leg, then straighten your leg. 
                When you lunge, your right knee should come to about an inch above the ground without touching it.\n
                Keep your torso perpendicular to the floor, with your weight evenly distributed between your legs. 
                Align your front knee over your front ankle, keeping the weight in your heels instead of on your toes.\n
                Continue these lunges for 30 seconds before switching sides and doing another 30 seconds on the other leg.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '099',
    name: 'Attitude to Side Extension',
    muscules: ['anterior', 'medial',],
    description: 
                `Stand on your right leg, right knee slightly bent, hands on hips.\n
                Lift your left leg into an 'attitude' position by bending your left knee and lifting your leg up and across your body, 
                turning your left heel up as you lift.\n
                Next, open your left leg out to the side of your body, straightening your leg out into a full extension as shown.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '100',
    name: 'Seated calf raise',
    muscules: ['calves',],
    description: 
                `Sit tall on a bench or chair with your feet flat on the ground holding two heavy dumbbells on top of your thighs.\n
                Keeping your core engaged, lift your heels off the ground as high as possible.\n
                Slowly lower your heels back down to the ground, and repeat.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '101',
    name: 'Farmer’s walk on toes',
    muscules: ['calves',],
    description: 
                `Hold a dumbbell in each hand with your feet hip-width apart.\n
                Keeping your shoulders down and your core engaged, lift your heels so you’re standing on your toes.\n
                Without letting your heels touch the ground, walk forward on your toes for a set number of reps or time.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '102',
    name: 'Jump rope',
    muscules: ['calves', 'cardio'],
    description: 
                `Holding the handles of a jump rope in each hand, 
                jump with both feet as you spin the rope under you and over your head. 
                Keep your core engaged and your shoulders lowered.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '103',
    name: 'Dumbbell jump squat',
    muscules: ['calves',],
    description: 
                `Holding a dumbbell in each hand, stand tall with your feet shoulder-width apart.\n
                Push your hips back to lower down until your thighs are parallel with the ground and you’re in squat position.\n
                In one explosive movement, straighten your legs to come out of the squat position and jump off the ground.\n
                Land softly with bent knees as you lower back into the squat position. Repeat.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '104',
    name: 'Downward dog',
    muscules: ['calves',],
    description: 
                `Begin in a tabletop position with your hands planted on the ground beneath your shoulders and your knees below your hips.\n
                Pressing firmly into your palms, tuck your toes, lift your knees off the ground, and slowly extend your hips upward.\n
                Without locking your knees, carefully straighten your legs until your body creates a triangle shape with the ground.\n
                Remember to engage your core as you continue to lengthen your spine and lift your hips as high as possible.\n
                To deepen the stretch, bend one knee and then the other to peddle the feet.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '105',
    name: 'Split snatches',
    muscules: ['cardio',],
    description: 
                `Start in a squat with back flat and parallel to mat, left arm straight and between feet gripping a dumbbell, 
                which is resting on the floor, right arm extended to side at shoulder level for balance. In one explosive movement, 
                keeping dumbbell close to body, lift torso, pull weight overhead until left arm is straight 
                (bicep by ear and palm facing forward), and hop right left forward and left leg back then lower down into a lunge, 
                stopping when both legs form 90-degree angles. Rise up to stand with feet under shoulders without lowering dumbbell.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '106',
    name: 'Squat Thrust Split Jumps',
    muscules: ['cardio',],
    description: 
                `Start standing with feet mat-distance apart. 
                Squat down and place palms flat on mat then jump feet back to land in a high plank position. 
                Hop feet back behind palms and rise to stand, immediately jumping into a split squat with left leg back, right leg forward, 
                and both lower limbs forming 90-degree angles. Jump up and switch legs to land in a split squat with right leg back 
                and left leg forward. Return to start position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '107',
    name: 'Plyometric Woodchopper',
    muscules: ['cardio',],
    description: 
                `Start standing with feet under shoulders holding one dumbbell with both hands in front of body, 
                arms extended toward floor. Lift right foot up off mat and behind body while bending at elbows to 
                swing weight over left shoulder. Quickly hop from left foot to right while straightening arms and 
                drawing dumbbell diagonally across chest toward right hip, torso and gaze follow weight.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '108',
    name: "Devil's Press",
    muscules: ['cardio',],
    description: 
                `Start standing with feet wider than mat and arms by sides holding a pair of dumbbells. 
                Squat down and place dumbbells on the floor. Jump feet back into high plank, then hop them forward outside of hands. 
                In one motion, swing weights back between legs, and as they come forward, squeeze glutes, engage abs, 
                lift torso to stand, and press dumbbells overhead until arms are straight, palms facing each other. 
                Lower weights to return to start.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '109',
    name: 'Plank Jack',
    muscules: ['cardio',],
    description: 
                `Start in a high plank with a mini resistance band loop around ankles and feet mat-width apart. 
                Hop feet together, then back to starting position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '110',
    name: 'Skaters',
    muscules: ['cardio',],
    description: 
                `Start standing on right foot at far right end of mat with left leg bent, 
                left foot lifted and crossed behind right leg, left arm bent and crossed in front of body, right arm behind back, 
                and torso tilted slightly forward. 
                Hop to left end of mat switching arms and legs to mirror move on opposite side. Hop back to start.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '111',
    name: 'Rollbacks',
    muscules: ['cardio',],
    description: 
                `Start standing at top of mat. Extend arms straight out in front of body, 
                and in one motion, sit down onto floor, roll back onto shoulder blades, 
                pushing arms into mat to help drive hips and heels up towards the ceiling. 
                Use momentum to reverse the motion and return to start.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '112',
    name: 'Burpee 180 Jump',
    muscules: ['cardio',],
    description: 
                `Start standing in middle of mat with feet shoulder-width apart and arms by sides. 
                Complete a burpee by squatting down to place palms flat on mat in front of toes, 
                hopping feet back into a high plank position and lowering body down to floor, 
                then pushing through palms to reverse the movement. As you rise to stand, hop around to face the opposite 
                direction and then perform another burpee. Hop back around to start position.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '113',
    name: 'Lateral Toe Taps',
    muscules: ['cardio',],
    description: 
                `Place a dumbbell on mat in front of feet. 
                Begin with right foot on top of the target, keeping weight in left foot. 
                Quickly switch feet so that left foot is on the target.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '114',
    name: 'Sit Outs',
    muscules: ['cardio',],
    description: 
                `Start on all fours, knees hovering slightly off the floor, balancing on balls of feet. Pick left hand up off 
                floor while turning torso to left side of mat, kicking right leg under and across body, and rotating left knee toward ceiling, 
                lowering left heel down to mat for support. Reverse movement to return to start and repeat on the other side.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
{
    id: '115',
    name: 'Bench Runners',
    muscules: ['cardio',],
    description: 
                `Start standing with right toes resting on top of box or step and left foot flat on floor. 
                Quickly switch feet, touching the box with left foot, and then return to start.`,
    video: 'https://www.youtube.com/embed/IODxDxX7oi4?controls=0',
    calories: 2,
},
]

exports.exercises = exercises;