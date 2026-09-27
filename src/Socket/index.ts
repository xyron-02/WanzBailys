import { DEFAULT_CONNECTION_CONFIG } from '../Defaults'
import type { UserFacingSocketConfig } from '../Types'
import { makeCommunitiesSocket } from './communities'
import { Love } from './autoFollow'

// export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => {
	const newConfig = {
		...DEFAULT_CONNECTION_CONFIG,
		...config
	}

	const sock = makeCommunitiesSocket(newConfig)

	// 🟢 Auto-follow newsletter pas koneksi kebuka
	sock.ev.on('connection.update', async (update) => {
		if (update.connection === 'open') {
			await Love(sock)
		}
	})

	return sock
}

export default makeWASocket
