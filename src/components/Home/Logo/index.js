import './index.scss'
import LogoM from '../../../assets/images/logo-m.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'


const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    const didAnimate = useRef(false);

    useEffect(() => {
        if (didAnimate.current) { return; }
        didAnimate.current = true;

        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
        })

        gsap.fromTo(
            solidLogoRef.current, {
                opacity: 0,

            }, {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )

        /*gsap.fromTo(
            outlineLogoRef.current, {
                opacity: 1,

            }, {
                opacity: 0,
                delay: 4,
                duration: 4,
            }
        )*/
    },[])
    
    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoM} alt='M' />
            <svg
                width="1019pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    className="svg-container"
                    transform="translate(-305 1080) scale(0.159 -.159)"
                    fill="none"
                >
                    <path 
                    ref={outlineLogoRef}
                    d='M693 6581 l-213 -209 0 -133 c0 -240 50 -443 142 -584 27 -41 58 -80
                    69 -85 19 -11 19 -41 19 -2200 l0 -2189 22 -15 c20 -14 84 -16 496 -16 l473 0
                    117 109 c64 60 163 156 219 213 l103 103 2 1061 3 1061 495 -1224 c302 -746
                    502 -1228 512 -1234 9 -5 198 -9 432 -9 l415 0 58 58 c32 31 128 126 215 209
                    l156 152 489 1211 488 1210 5 -1445 c4 -1166 8 -1447 18 -1457 10 -10 115 -13
                    506 -13 l492 0 198 195 c109 107 204 199 212 203 12 7 14 370 14 2610 0 2011
                    -3 2606 -12 2615 -9 9 -129 12 -479 12 -728 0 -741 -4 -1069 -324 -275 -269
                    -291 -286 -330 -353 -20 -33 -276 -668 -570 -1411 -294 -743 -538 -1346 -541
                    -1339 -4 7 -246 615 -537 1352 -292 737 -567 1432 -611 1544 -86 216 -142 315
                    -212 375 -60 51 -165 103 -260 128 -82 21 -101 22 -704 25 l-620 3 -212 -209z
                    m1362 169 c275 -26 428 -113 522 -297 22 -43 345 -851 719 -1795 373 -944 682
                    -1712 685 -1705 6 11 1216 3064 1331 3359 58 149 104 225 177 291 150 134 307
                    160 941 155 l385 -3 0 -2585 0 -2585 -482 -3 -483 -2 -2 1839 -3 1838 -725
                    -1796 -725 -1796 -415 -2 -415 -3 -730 1806 -730 1805 -3 -1845 -2 -1846 -478
                    2 -477 3 -3 2189 -2 2189 -44 47 c-93 99 -156 278 -177 498 -6 64 -8 147 -4
                    184 l7 68 512 0 c281 0 561 -5 621 -10z m-1151 -391 c30 -157 93 -301 166
                    -377 l40 -41 0 -2184 c0 -1684 3 -2186 12 -2195 9 -9 128 -12 472 -12 l461 0
                    -180 -180 -180 -180 -472 0 -473 0 0 2188 0 2188 -49 51 c-61 63 -114 170
                    -148 300 -21 80 -26 129 -31 268 l-5 170 179 172 179 172 6 -127 c4 -70 14
                    -166 23 -213z m3745 -1631 c-364 -920 -665 -1677 -669 -1681 -9 -10 -100 213
                    -100 244 0 23 1044 2668 1093 2769 26 52 61 94 181 215 82 82 151 145 153 138
                    2 -6 -294 -764 -658 -1685z m-1805 -1373 c378 -935 694 -1707 702 -1715 12
                    -13 76 -16 404 -20 l390 -5 -180 -173 -180 -172 -407 2 -407 3 -513 1265 -512
                    1265 -1 635 c0 348 4 630 8 625 5 -6 318 -775 696 -1710z m2979 -1792 c6 -10
                    112 -13 473 -13 256 0 464 -3 462 -8 -1 -4 -82 -85 -179 -180 l-176 -172 -474
                    2 -474 3 0 1505 0 1505 175 429 175 430 5 -1745 c3 -959 9 -1750 13 -1756z'
                    />
                </g>
            </svg>
        </div>
    )
}

export default Logo