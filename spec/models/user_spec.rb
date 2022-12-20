require 'rails_helper'


RSpec.describe User, type: :model do

    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }

    it { should have_many(:workouts) }
    it { should have_many(:workout_logs) }
    it { should have_many(:user_exercises) }
    it { should have_many(:food_logs) }
    it { should have_many(:food_diaries) }
    it { should have_many(:food_items) }

    it "creates a new user when given valid attributes" do
        expect(FactoryBot.build(:user)).to be_valid
    end

    it "doesn't create a new user when given no attributes" do
        expect(User.new).to_not be_valid
    end

    it "validates that the password is at least 6 characters long" do
        expect(User.new(email: 'd@d.com', password: '12345')).to_not be_valid
    end

    it "ensures a new user enters a unique email" do
        user = FactoryBot.build(:user)
        user.save()
        expect(User.create(email: 'david@david.com', password: 'password')).to_not be_valid
    end 


end
