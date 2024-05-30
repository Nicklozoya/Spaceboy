import React from 'react'
import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Html } from '@react-three/drei';
import Spaceboi from '../../public/Spaceboi';
import Rotatingearth from '../../public/Rotatingearth';
import Rotatingmercury from '../../public/Rotatingmercury';
import Rotatingvenus from '../../public/Rotatingvenus';
import Rotatingmars from '../../public/Rotatingmars';
import Rotatingjupiter from '../../public/Rotatingjupiter';
import Rotatingsaturn from '../../public/Rotatingsaturn';
import Rotatinguranus from '../../public/Rotatinguranus';
import Rotatingneptune from '../../public/Rotatingneptune';
import '../fonts/SpaceGome-1jPKg.ttf'
import Donate from '../Components/Donate';
import Planetlist from '../Components/Planetlist';
import { Spacestate } from './Spacestate';


export default function Space() {
    const [showItem, setShowItem] = useState(false)
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    useEffect(() => {
   speak("Hello I'm Spaceboi. Ask me any questions to learn about space.");
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const prompt = `You are a space guide. Do not answer any other questions that are not about space. Answer the following question about space: ${question}`;
      try {
        const response = await fetch(
          'https://api.openai.com/v1/completions',
          {
            method: 'Post',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
            model:'gpt-3.5-turbo-instruct',
            prompt: prompt,
            max_tokens: 500,
            })
          }
        );
        const data = await response.json()
        const answer = data.choices[0].text.trim();
        setAnswer(answer);
        speak(answer);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const speak = (text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    };
    return (
      <>
       <Spacestate>
      <div className='space'>
        <Canvas>
          <ambientLight intensity={0.2} />
          <PerspectiveCamera makeDefault position={[2, 12, 10]} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.2} minPolarAngle={Math.PI / 2.5} />
          <color attach="background" args={['black']} />
          <Suspense fallback={null}>
            <Spaceboi />
            <Rotatingmercury />
            <Rotatingvenus />
            <Rotatingmars />
            <Rotatingearth />
            <Rotatingjupiter />
            <Rotatingsaturn />
            <Rotatinguranus />
            <Rotatingneptune />
            <Stars />
            <Html position={[0, 5, 0]}>
              <section className="chat">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask a question about space..."
                  />
                </form>
              </section>
            </Html>
            <Html position={[0, -5, 0]}>
             <Donate />
            </Html>
            <Html position={[0, 0, 0]}>
            <Planetlist />
            </Html>
          </Suspense>
        </Canvas>
        </div>
        </Spacestate>
      </>
    );
}
