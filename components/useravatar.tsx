import { useUser } from '@clerk/nextjs';
import React from 'react';
import { Avatar } from './ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

const UserAvatar = () => {
  const { user } = useUser();
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1" src={user?.profileImageUrl} />
      <AvatarFallback className="p-1">
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
