import { exec } from 'child_process';

export default async function compressAudio(inputFilePath: string, outputFilePath: string) {
    return new Promise<void>((resolve, reject) => {
        const command = `ffmpeg -i ${inputFilePath} -b:a 64k ${outputFilePath}`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error compressing audio: ${error.message}`);
                reject(error);
                return;
            }
            if (stderr) {
                console.error(`ffmpeg stderr: ${stderr}`);
            }
            console.log(`Audio compressed successfully: ${outputFilePath}`);
            resolve();
        });
    });
}
