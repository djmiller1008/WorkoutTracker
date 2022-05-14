require 'rails_helper'


RSpec.describe User, type: :model do

    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }

    it { should have_many(:workouts) }

    it "creates a new user when given valid attributes" do
        expect(build(:user)).to be_valid
    end

    it "doesn't create a new user when given no attributes" do
        expect(User.new).to_not be_valid
    end

    it "validates that the password is at least 6 characters long" do
        expect(User.new(username: 'Dave', password: '12345')).to_not be_valid
    end

end
