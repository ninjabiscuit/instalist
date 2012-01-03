require 'spec_helper'

describe HomeController do
  describe "GET /" do
    it "Redirects to sign in" do
      get root_path
      response.should redirect_to('/users/sign_in')
    end
  end
end

describe HomeController do
  
  login_user
  
  it "should have a current_user" do
    subject.current_user.should_not be_nil
  end

  it "should get index" do
    get 'index'
    response.should be_success
  end
end


