import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.guruai.app',
  appName: 'guruai',
  webDir: 'build',
  server: {
    url: '192.168.1.243:3000',
    androidScheme: 'https'
  }
};

export default config;
