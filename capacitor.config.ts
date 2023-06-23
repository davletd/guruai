import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.guruai.app',
  appName: 'guruai',
  webDir: 'build',
  server: {
    url: 'http://192.168.10.139:3000',
    cleartext: true,
    androidScheme: 'https'
  }
};

export default config;
