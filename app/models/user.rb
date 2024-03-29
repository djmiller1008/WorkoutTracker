class User < ApplicationRecord
    before_validation :ensure_session_token

    validates :email, presence: true, uniqueness: true, email: true
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    attr_reader :password

    has_many :workouts 
    has_many :workout_logs
    has_many :user_exercises
    has_many :food_logs
    has_many :food_diaries
    has_many :food_items

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
 
    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def show_workouts(limit = nil)
        @workouts = self.workouts.order(date: :desc)
        @workouts = @workouts.limit(limit) if limit
        @workouts
    end

    def show_food_diaries(limit = nil)
        @food_diaries = self.food_diaries.order(date: :desc)
        @food_diaries = @food_diaries.limit(limit) if limit
        @food_diaries
    end

end
