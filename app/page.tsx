'use client'; // Mark the component as a client component

import { SetStateAction, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardFooter, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify styles

export default function Home() {
  const [inputText, setInputText] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [numberOfRepeats, setNumberOfRepeats] = useState<number>(5);
  const [lineCount, setLineCount] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleRepeatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setNumberOfRepeats(isNaN(value) || value < 1 ? 1 : value);
  };

  const generateOutput = () => {
    let result = '';
    for (let i = 0; i < numberOfRepeats; i++) {
      result += inputText + '\n';
    }
    setOutput(result);
  };

  useEffect(() => {
    const count = output.split('\n').filter(line => line.trim() !== '').length;
    setLineCount(count);
  }, [output]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output).then(() => {
      toast.success('Output copied to clipboard successfully!');
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <Card className="w-full max-w-3xl shadow-lg border border-gray-200">
        <CardHeader className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">สแปมข้อความ</h1>
          <p className="text-sm text-gray-500">ใส่คำและจำนวนครั้งที่ต้องการ</p>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="inputText" className="font-medium text-gray-700">ใส่คำ:</Label>
                <Input
                  type="text"
                  id="inputText"
                  placeholder="Enter text to repeat"
                  value={inputText}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="repeats" className="font-medium text-gray-700">ครั้งที่ต้องการให้ Spam:</Label>
                <Input
                  type="number"
                  id="repeats"
                  placeholder="Number of repetitions"
                  value={numberOfRepeats}
                  onChange={handleRepeatChange}
                  min="1"
                  className="mt-1"
                />
              </div>

              <Button onClick={generateOutput} className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                Generate
              </Button>
            </div>

            {/* Output Section */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="outputText" className="font-medium text-gray-700">Output:</Label>
                <Textarea
                  id="outputText"
                  readOnly
                  value={output}
                  placeholder="Generated output will appear here."
                  className="mt-1 min-h-[150px] max-h-[300px] overflow-y-auto"
                />
              </div>
              <p className="text-sm text-gray-500">
                คำทั้งหมด : <span className="font-medium text-gray-700">{lineCount}</span>
              </p>
              <Button onClick={copyToClipboard} className="w-full bg-green-500 hover:bg-green-600 text-white">
                Copy Output
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-400">
          © 2023 Moji Dev. All rights reserved.
        </CardFooter>
      </Card>
      <ToastContainer /> {/* Add ToastContainer for react-toastify */}
    </div>
  );
}
