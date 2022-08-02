# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_02_050002) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exercise_categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "exercises", force: :cascade do |t|
    t.string "name", null: false
    t.integer "exercise_category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "food_diaries", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "date", null: false
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "food_items", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.integer "calories", null: false
    t.integer "fat"
    t.integer "protein"
    t.integer "carbohydrates"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "food_logs", force: :cascade do |t|
    t.integer "food_item_id", null: false
    t.integer "user_id", null: false
    t.integer "servings", null: false
    t.integer "food_diary_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_exercises", force: :cascade do |t|
    t.string "name", null: false
    t.integer "user_id", null: false
    t.integer "exercise_category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
  end

  create_table "workout_logs", force: :cascade do |t|
    t.integer "workout_id", null: false
    t.integer "reps"
    t.integer "weight"
    t.string "weight_unit"
    t.integer "user_id", null: false
    t.string "rep_unit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", null: false
    t.integer "user_exercise_id"
    t.integer "exercise_id"
    t.index ["user_id"], name: "index_workout_logs_on_user_id"
    t.index ["workout_id"], name: "index_workout_logs_on_workout_id"
  end

  create_table "workouts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "date", null: false
    t.string "comment"
    t.index ["user_id"], name: "index_workouts_on_user_id"
  end

end
