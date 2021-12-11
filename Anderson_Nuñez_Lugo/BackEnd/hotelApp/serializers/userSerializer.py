from rest_framework import serializers
from hotelApp.models.user import User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'password', 'fname', 'lname', 'phone', 'email']
    def create(self, validated_data):
        userInstance = User.objects.create(**validated_data)
        return userInstance
    def to_representation(self, obj):
        user = User.objects.get(id=obj.id)
        return {
                'id'                : user.id,
                'fname'              : user.fname,
                'lname'              : user.lname,
                'phone'             : user.phone,
                'email'             : user.email,
        }