import React, { useState } from 'react';
import { useUserInfo } from './Hooks';
import { Avatar, makeStyles } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person'

const useStyles = makeStyles(theme => ({
	userIcon:{
		width: "80%",
		height: "80%",
	}
}))

const UserAvatar = ({ userId, avatarClassName, ...props }) => {
  const classes = useStyles()
  const [userInfo, , loading, error] = useUserInfo(userId, null)

  if (loading || error || userInfo === null || userInfo.imageUrl === null) {
    return (
      <Avatar className={avatarClassName} {...props}>
        <PersonIcon className={classes.userIcon} />
      </Avatar>
    )
  }else{
    return <Avatar className={avatarClassName} {...props} src={`${process.env.REACT_APP_API_ENDPOINT}${userInfo.imageUrl}`}/>
  }
}

export default UserAvatar