# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :session_token, :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 5 }, allow_nil: true
    validates :password_digest, presence: true
    before_validation :ensure_session_token
    attr_reader :password

    has_many :users_games,
        foreign_key: :user_id,
        class_name: "UsersGame"

    has_many :games,
        through: :users_games,
        source: :game

    
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password) 
            return user
        else
            return nil
        end
    end

    def password=(pw)
        self.password_digest = BCrypt::Password.create(pw)
        @password = pw
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
