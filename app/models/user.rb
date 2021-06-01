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

    

end
