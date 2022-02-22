import { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  const config: UserConfig = {
    plugins: [react()]
  }
  if (command === 'serve') {
    config.server = {
      proxy: {
        '/mockGateway': {
          // target: 'https://qd2-gw.dev.qdingnet.com',
          target: 'https://qd2-gw.qa.qdingnet.com',
          // target: 'https://qd2-gw.qdingnet.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/mockGateway/, '')
        }
      }
    }
  }
  return config
}
