import { useEffect, useRef, useState } from 'react';
import walkSprite1 from './cat/Walk.png';
import idleSprite1 from './cat/Idle.png'
import walkSprite2 from './cat/Walk2.png';
import idleSprite2 from './cat/Idle2.png'

const FRAME_WIDTH = 48;
const FRAME_HEIGHT = 48;
const IDLE_COUNT = 4;
const IDLE_SPEED = 200;
const WALK_COUNT = 6;
const WALK_SPEED = 100;
const SCALE = 4;

const Cat = () => {
    const [frame, setFrame] = useState(0);
    const [isWalking, setIsWalking] = useState(false);
    const [vwToPx, setVwToPx] = useState(window.innerWidth / 100);
    const prevScrollY = useRef(window.scrollY);
    const direction = useRef('right');
    const animating = useRef(false);
    const walkingTimer = useRef(null);

    const sprites = useRef(
            Math.random() <= 0.90
                ? { walk: walkSprite1, idle: idleSprite1, color: true }
                : { walk: walkSprite2, idle: idleSprite2, color: false }
    ).current;

    useEffect(() => {

        let idleInterval;

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if(currentScroll !== prevScrollY.current){
                direction.current = currentScroll > prevScrollY.current ? 'right' : 'left';
                prevScrollY.current = currentScroll;
                if(!isWalking){
                    setIsWalking(true);
                    animate(WALK_COUNT, WALK_SPEED, () => setIsWalking(false));
                }
                clearTimeout(walkingTimer.current);
                walkingTimer.current = setTimeout(() => setIsWalking(false), WALK_COUNT * WALK_SPEED);
            }
        };

        const animate = (frameCount, speed, onComplete) => {
            if (animating.current) return;
            animating.current = true;
            let current = 0;
            const interval = setInterval(() => {
                setFrame(f => (f + 1) % frameCount);
                current++;
                if (current >= frameCount) {
                clearInterval(interval);
                animating.current = false;
                onComplete();
                }
            }, speed);
        };

        const idleAnimation = () => {
            setFrame((f) => (f + 1) % IDLE_COUNT);
        };

        window.addEventListener('scroll', handleScroll);
        
        idleInterval = setInterval(() => {
            if (!isWalking) {
                idleAnimation();
            }
        }, IDLE_SPEED);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(idleInterval);
        };
    }, [isWalking]);

    const platformWidthPx = 14 * vwToPx;
    const platformRightPx = 3 * vwToPx - (SCALE*0.9);
    const K = SCALE * 20;
    let catOffsetRight;
    if (sprites.color) {
        catOffsetRight = direction.current === 'left'
        ? (platformRightPx + platformWidthPx - (FRAME_WIDTH * SCALE * 1.02))
        : (platformRightPx - (FRAME_WIDTH * SCALE * 0.24));
    }
    else {
        catOffsetRight = direction.current === 'left'
        ? (platformRightPx + platformWidthPx - (FRAME_WIDTH * SCALE))
        : (platformRightPx - (FRAME_WIDTH * SCALE * 0.25));
    }

    return (
    <>
    <div
        style={{
          position: 'fixed',
          bottom: '0vh',
          right: `${platformRightPx}px`,
          width: `${platformWidthPx}px`,
          height: `${FRAME_HEIGHT * SCALE * 0.1}px`,
          backgroundColor: '#2c2c2c',
          zIndex: 998
        }}
    />
    <div
      style={{
        position: 'fixed',
        bottom: `${FRAME_HEIGHT * SCALE * 0.1}px`,
        right: `${catOffsetRight}px`,
        width: `${FRAME_WIDTH}px`,
        height: `${FRAME_HEIGHT}px`,
        backgroundImage: `url(${isWalking ? sprites.walk : sprites.idle})`,
        backgroundPosition: `-${frame * FRAME_WIDTH}px 0px`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${FRAME_WIDTH * (isWalking ? WALK_COUNT : IDLE_COUNT)}px ${FRAME_HEIGHT}px`,
        imageRendering: 'pixelated',
        transform: `${direction.current === 'left' ? 'scaleX(-1)' : 'scaleX(1)'} scale(${SCALE}) `,
        transformOrigin: direction.current === 'left' ? 'bottom left' : 'bottom right',
        zIndex: 999
      }}
    />
    </>
  );
};

export default Cat;

