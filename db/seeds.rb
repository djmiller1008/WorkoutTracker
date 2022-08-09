# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



FoodItem.destroy_all

=begin
Workout.destroy_all
WorkoutLog.destroy_all
Exercise.destroy_all
ExerciseCategory.destroy_all



User.create(email: "admin@admin.com", password: "123456") 



abs = ExerciseCategory.create(name: 'abs')
arms = ExerciseCategory.create(name: 'arms')
back = ExerciseCategory.create(name: 'back')
chest = ExerciseCategory.create(name: 'chest')
legs = ExerciseCategory.create(name: 'legs')
shoulders = ExerciseCategory.create(name: 'shoulders')
body = ExerciseCategory.create(name: 'full Body')
hips = ExerciseCategory.create(name: 'hips')


Exercise.create(name: 'Kettlebell Swing', exercise_category_id: back.id)
Exercise.create(name: 'Arnold Press', exercise_category_id: shoulders.id)
Exercise.create(name: 'Barbell Squat', exercise_category_id: legs.id)
Exercise.create(name: 'Barbell Ab Rollout', exercise_category_id: abs.id)
Exercise.create(name: 'Barbell Hack Squat', exercise_category_id: legs.id)
Exercise.create(name: 'Barbell Lunges', exercise_category_id: legs.id)
Exercise.create(name: 'Wrist Curl', exercise_category_id: arms.id)
Exercise.create(name: 'Triceps Extension', exercise_category_id: arms.id)
Exercise.create(name: 'Bench Press', exercise_category_id: chest.id)
Exercise.create(name: 'Dumbbell Bench Press', exercise_category_id: chest.id)
Exercise.create(name: 'Bent Over Barbell Row', exercise_category_id: back.id)
Exercise.create(name: 'Bent Over Dumbbell Row', exercise_category_id: back.id)
Exercise.create(name: 'Lateral Raise', exercise_category_id: shoulders.id)
Exercise.create(name: 'Bicep Curl (Barbell)', exercise_category_id: arms.id)
Exercise.create(name: 'Bicep Curl (Dumbbell)', exercise_category_id: arms.id)
Exercise.create(name: 'Squat', exercise_category_id: legs.id)
Exercise.create(name: 'Burpees', exercise_category_id: arms.id)
Exercise.create(name: 'Cable Crossover', exercise_category_id: chest.id)
Exercise.create(name: 'Calf Raises', exercise_category_id: legs.id)
Exercise.create(name: 'Chin Up', exercise_category_id: arms.id)
Exercise.create(name: 'Crunch', exercise_category_id: abs.id)
Exercise.create(name: 'Deadlift', exercise_category_id: back.id)
Exercise.create(name: 'Dips', exercise_category_id: arms.id)
Exercise.create(name: 'Dumbbell Fly', exercise_category_id: chest.id)
Exercise.create(name: 'Lunges', exercise_category_id: legs.id)
Exercise.create(name: 'Overhead Press (Dumbbell)', exercise_category_id: shoulders.id)
Exercise.create(name: 'Overhead Press (Barbell)', exercise_category_id: shoulders.id)
Exercise.create(name: 'Pec Fly (Cable)', exercise_category_id: chest.id)
Exercise.create(name: 'Front Raise', exercise_category_id: shoulders.id)
Exercise.create(name: 'Front Squat', exercise_category_id: legs.id)
Exercise.create(name: 'Glute Bridge', exercise_category_id: legs.id)
Exercise.create(name: 'Hammer Curl', exercise_category_id: arms.id)
Exercise.create(name: 'Hanging Leg Raises', exercise_category_id: abs.id)
Exercise.create(name: 'Incline Bench Press', exercise_category_id: chest.id)
Exercise.create(name: 'Decline Bench Press', exercise_category_id: chest.id)
Exercise.create(name: 'Incline Dumbbell Press', exercise_category_id: chest.id)
Exercise.create(name: 'Decline Dumbbell Press', exercise_category_id: chest.id)
Exercise.create(name: 'Jumping Jacks', exercise_category_id: body.id)
Exercise.create(name: 'Lat Pulldown', exercise_category_id: back.id)
Exercise.create(name: 'Leg Curl', exercise_category_id: legs.id)
Exercise.create(name: 'Leg Extension', exercise_category_id: legs.id)
Exercise.create(name: 'Leg Press', exercise_category_id: legs.id)
Exercise.create(name: 'Leg Raises', exercise_category_id: legs.id)
Exercise.create(name: 'Military Press', exercise_category_id: shoulders.id)
Exercise.create(name: 'Pushups', exercise_category_id: chest.id)
Exercise.create(name: 'Pistol Squat', exercise_category_id: legs.id)
Exercise.create(name: 'Power Clean', exercise_category_id: body.id)
Exercise.create(name: 'Preacher Curl', exercise_category_id: arms.id)
Exercise.create(name: 'Pull-ups', exercise_category_id: back.id)
Exercise.create(name: 'Reverse Curl', exercise_category_id: arms.id)
Exercise.create(name: 'Row', exercise_category_id: back.id)
Exercise.create(name: 'Russian Twists', exercise_category_id: abs.id)
Exercise.create(name: 'Hip Adduction', exercise_category_id: hips.id)
Exercise.create(name: 'Hip Abduction', exercise_category_id: hips.id)
Exercise.create(name: 'Shoulder Press (Dumbbell)', exercise_category_id: shoulders.id)
Exercise.create(name: 'Shoulder Press (Machine)', exercise_category_id: shoulders.id)
Exercise.create(name: 'Shoulder Shrugs', exercise_category_id: shoulders.id)
Exercise.create(name: 'Shoulder Shrugs (Dumbbell)', exercise_category_id: shoulders.id)
Exercise.create(name: 'Side Crunch', exercise_category_id: abs.id)
Exercise.create(name: 'Sit-ups', exercise_category_id: abs.id)
Exercise.create(name: 'Supermans', exercise_category_id: back.id)



=end




















