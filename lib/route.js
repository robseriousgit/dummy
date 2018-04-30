import { status } from './handlers/status';

export default (server) => {
  // Status check
  server.get('/__health', status);
}

