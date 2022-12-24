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
        expect(User.new(email: 'data@data.com', password: 'password')).to be_valid
    end

    it "doesn't create a new user when given no attributes" do
        expect(User.new).to_not be_valid
    end

    it "validates that the password is at least 6 characters long" do
        expect(User.new(email: 'd@d.com', password: '12345')).to_not be_valid
    end

    it "ensures a new user enters a unique email" do
        user = FactoryBot.create(:user)
        expect(User.create(email: 'david@david.com', password: 'password')).to_not be_valid
    end 

    describe 'find_by_credentials' do
        context 'with valid params' do
            it 'returns the user' do
                user = FactoryBot.create(:user)
                result = User.find_by_credentials(user.email, user.password) 
                expect(result).to eq(user)
            end
        end

        context 'with invalid params' do 
            it 'returns nil' do
                result = User.find_by_credentials('bad_email', 'bad_password')
                expect(result).to eq(nil)
            end
        end

        context 'with valid email and invalid password' do
            it 'returns nil' do
                user = FactoryBot.create(:user)
                result = User.find_by_credentials(user.email, 'bad_password')
                expect(result).to eq(nil)
            end
        end
    end

    describe 'reset_session_token!' do
        it 'resets the users session token' do
            user = FactoryBot.create(:user)
            session_token = user.session_token
            new_session_token = user.reset_session_token!
            expect(new_session_token).to_not eq(session_token)
        end
    end

    describe 'show_food_diaries' do
        context 'when no limit is passed as an argument' do
            it 'returns all food_diaries' do 
                user = FactoryBot.create(:user)
                FactoryBot.create_list(:food_diary, 15, user: user)
                food_diaries = user.show_food_diaries
                expect(food_diaries.length).to eq(15)
            end
        end

        context 'when a limit is passed as an argument' do
            it 'returns a limited number of food diaries' do
                user = FactoryBot.create(:user) 
                FactoryBot.create_list(:food_diary, 10, user: user)
                food_diaries = user.show_food_diaries(5)
                expect(food_diaries.length).to eq(5)
            end
        end
    end

    describe 'show_workouts' do 
        context 'when no limit is passed as an argument' do 
            it 'returns all workouts' do
                user = FactoryBot.create(:user)
                workouts = FactoryBot.create_list(:workout, 5, user: user)
                workouts = user.show_workouts 
                expect(workouts.length).to eq(5)
            end
        end

        context 'when a limit is passed as an argument' do
            it 'returns a limited number of workouts' do
                user = FactoryBot.create(:user)
                FactoryBot.create_list(:workout, 8, user: user)
                workouts = user.show_workouts(3)
                expect(workouts.length).to eq(3)
            end
        end
    end 
end
