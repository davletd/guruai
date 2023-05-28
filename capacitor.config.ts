import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.guruai.app',
  appName: 'guruai',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
