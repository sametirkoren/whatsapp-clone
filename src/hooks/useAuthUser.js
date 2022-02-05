import { auth, createTimestamp } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'; 
import React from 'react';
import { db } from '../firebase';

export default function useAuthUser() {
  const [user] = useAuthState(auth);
  
  React.useEffect(() => {
      if(user) {
        const ref = db.collection('users').doc(user.uid)
        ref.get().then(doc => {
            if(!doc.exists){
                ref.set({
                    name: user.displayName,
                    photoURL: user.photoURL,
                    timestamp: createTimestamp(),
                })
            }
        });
      }
  }, [user]);

  return user;
}
