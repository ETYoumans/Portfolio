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
//let SCALE = 4;

const Cat = () => {
    const [frame, setFrame] = useState(0);
    const [isWalking, setIsWalking] = useState(false);
    const [vwToPx, setVwToPx] = useState(window.innerWidth / 100);
    const prevScrollY = useRef(window.scrollY);
    const direction = useRef('right');
    const animating = useRef(false);
    const walkingTimer = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [platformRightPx, setPlatformRightPx] = useState(0);
    const [platformWidthPx, setPlatformWidthPx] = useState(0);
    const [catOffsetRight, setCatOffsetRight] = useState(0);

    const [scale, setScale] = useState(getResponsiveScale());

    function getResponsiveScale() {
        const baseScale = 5;
        const minScale = 1.5;
        const minWidth = 540;
        const maxWidth = 1200;

        const clampedWidth = Math.max(minWidth, Math.min(window.innerWidth, maxWidth));
        const scale = baseScale * ((clampedWidth - minWidth) / (maxWidth - minWidth));
        return Math.max(minScale, scale);
    }

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

        const handleResize = () => {
            const newScale = getResponsiveScale();
            const currentWindowWidth = window.innerWidth;
            setWindowWidth(currentWindowWidth);
            setVwToPx(currentWindowWidth / 100);
            setScale(newScale);

            let feetCenter = sprites.color ? 21 : 20;

            feetCenter = direction.current === 'left' 
                ? FRAME_WIDTH - feetCenter : feetCenter;
            

            let feetCenterOffsetScaled = feetCenter * newScale;

            const rightInsetPercent = 3;
            const rightInsetPx = (currentWindowWidth * rightInsetPercent) / 100;
            const catWidthPx = FRAME_WIDTH * newScale;

            setPlatformWidthPx(catWidthPx);
            setPlatformRightPx(rightInsetPx);

            const platformCenterPx = rightInsetPx + (catWidthPx / 2);
            const catOffsetRight = platformCenterPx - (catWidthPx - feetCenterOffsetScaled)
            const catOffsetAdjustment = (FRAME_WIDTH*(newScale - 1)) / 2

            setCatOffsetRight(catOffsetRight + catOffsetAdjustment);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        
        idleInterval = setInterval(() => {
            if (!isWalking) {
                idleAnimation();
            }
        }, IDLE_SPEED);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            clearInterval(idleInterval);
            clearTimeout(walkingTimer.current);
        };
    }, [isWalking]);

    //translateX(-${FRAME_WIDTH}px) 
    return (
    <>
    <div
      style={{
        position: 'fixed',
        bottom: `8vh`,
        right: `${catOffsetRight}px`,
        width: `${FRAME_WIDTH}px`,
        height: `${FRAME_HEIGHT}px`,
        backgroundImage: `url(${isWalking ? sprites.walk : sprites.idle})`,
        backgroundPosition: `-${frame * FRAME_WIDTH}px 0px`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${FRAME_WIDTH * (isWalking ? WALK_COUNT : IDLE_COUNT)}px ${FRAME_HEIGHT}px`,
        imageRendering: 'pixelated',
        
        transform: `
         scaleX(${direction.current === 'left' ? -1 : 1})
         scale(${scale})
        `,
        transformOrigin: 'bottom center',
        zIndex: 999
      }}
    />
    </>
  );
};

export default Cat;

