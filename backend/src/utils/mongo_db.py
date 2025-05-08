
def get_user_by_email(self, email):
    try:
        user = self.collection.find_one({"email": email})
        return user
    except Exception as e:
        print(f"Error retrieving user by email: {e}")
        return None
