import OneSignal from 'react-onesignal';

export default async function runOneSignal() {
  try {
    await OneSignal.init({ appId: 'cf54b259-5bce-4024-806c-326918718874', allowLocalhostAsSecureOrigin: true});
    OneSignal.Slidedown.promptPush();
  } catch (error) {
    console.log('error one signal', error)
  }
}