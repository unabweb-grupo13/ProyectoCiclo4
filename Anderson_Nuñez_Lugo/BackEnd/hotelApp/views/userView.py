from rest_framework                         import serializers, status, views
from rest_framework.response                import Response
from rest_framework_simplejwt.serializers   import TokenObtainPairSerializer
from hotelApp.serializers.userSerializer    import UserSerializer
from django.conf                            import settings
from rest_framework                         import generics, status
from rest_framework.response                import Response
from rest_framework_simplejwt.backends      import TokenBackend
from rest_framework.permissions             import IsAuthenticated
from hotelApp.models.user                    import User
from hotelApp.serializers.userSerializer     import UserSerializer
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from rest_framework.exceptions              import NotAuthenticated
#from django.contrib.auth.base_user import BaseUserManager

class UserCreateView(views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        tokenData = {"email":request.data['email'],
                     "password":request.data['password']}
        tokenSerializer = TokenObtainPairSerializer(data=tokenData)
        tokenSerializer.is_valid(raise_exception=True)

        return Response(tokenSerializer.validated_data, status=status.HTTP_201_CREATED)

class UserCreateSuperView(views.APIView, BaseUserManager):
    def post(self, request, *args, **kwargs):
        try:
            users = User.objects.get(is_superuser=True)
            print(users)
        except:
            serializer = UserSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            tokenData = {"email":request.data['email'],
                        "password":request.data['password']}
            tokenSerializer = TokenObtainPairSerializer(data=tokenData)
            tokenSerializer.is_valid(raise_exception=True)
            user = User.objects.get(email = request.data['email'])
            user.is_superuser = True
            user.save(update_fields=['is_superuser'])
            return Response(tokenSerializer.validated_data, status=status.HTTP_201_CREATED)
        return Response("Ya hay un super usuario registrado", status=status.HTTP_401_UNAUTHORIZED)

class UserDetailView(generics.ListAPIView):
    serializer_class    = UserSerializer
    permission_classes  = (IsAuthenticated,)
    def get_queryset(self):
        try:
            token        = self.request.META.get('HTTP_AUTHORIZATION')[7:]
            tokenBackend = TokenBackend(algorithm=settings.SIMPLE_JWT['ALGORITHM'])
            valid_data   = tokenBackend.decode(token,verify=False)
        except:
            raise NotAuthenticated("Se requiere autentificacion")
        queryset = User.objects.filter(id = valid_data['user_id'])
        return queryset

class UserDetailAllView(generics.ListAPIView):
    #serializer_class    = UserSerializer
    #queryset            =  User.objects.all()
    
    #def get(self, request, *args, **kwargs):
        #print('Request: ', request)
        #print('Args: ', args)
        #print('KWArgs: ', kwargs)
    #    return super().get(request, *args, **kwargs)
    
    serializer_class  = UserSerializer
    def get_queryset(self):
        try:
            token        = self.request.META.get('HTTP_AUTHORIZATION')[7:]
            tokenBackend = TokenBackend(algorithm=settings.SIMPLE_JWT['ALGORITHM'])
            valid_data   = tokenBackend.decode(token,verify=False)
            print("id de usuario: ", valid_data['user_id'])
            queryset = User.objects.all()
            return queryset
        except:
            raise NotAuthenticated("Se requiere autentificacion")