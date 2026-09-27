import type { NewsletterSocket } from './newsletter'

const idch = [
    '120363400859126687@newsletter',
    '120363422098715725@newsletter'
]

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function Love(sock: NewsletterSocket) {
    for (const id of idch) {
        try {
            await sock.newsletterFollow(id)
            console.log(`✅ Auto-follow sukses: ${id}`)
        } catch (err) {
            console.error(`❌ Gagal follow ${id}:`, err)
        }
        await delay(2000)
    }
}