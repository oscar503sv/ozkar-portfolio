import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
    const file = path.join(process.cwd(), 'public', 'cvOscarES.pdf');
    var b = Buffer.from(readFileSync(file, 'binary'), 'binary');
  
    res.setHeader('Content-Type', 'application/pdf');
    return res.end(b);
}
