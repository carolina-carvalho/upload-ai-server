import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from './lib/routes/get-all-prompts'
import { uploadVideoRoute } from './lib/routes/upload-video'
import { createTranscriptionRoute } from './lib/routes/create-transcription'
import { generateAiCompletionRoute } from './lib/routes/generate-ai-completion'

const app = fastify()

app.register(fastifyCors, {
    origin: '*'
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)


app.listen({
    port: 3333
}).then(() => {
    console.log("HTTP Server running")
})