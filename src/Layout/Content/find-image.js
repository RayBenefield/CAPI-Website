import alpine from './images/alpine.jpg';
import breakoutArena from './images/breakout-arena.jpg';
import coliseum from './images/coliseum.jpg';
import eden from './images/eden.jpg';
import empire from './images/empire.jpg';
import fathom from './images/fathom.jpg';
import glacier from './images/glacier.jpg';
import mercy from './images/mercy.jpg';
import overgrowth from './images/overgrowth.jpg';
import parallax from './images/parallax.jpg';
import plaza from './images/plaza.jpg';
import regret from './images/regret.jpg';
import riptide from './images/riptide.jpg';
import stasis from './images/stasis.jpg';
import theRig from './images/the-rig.jpg';
import tidal from './images/tidal.png';
import torque from './images/torque.jpg';
import truth from './images/truth.jpg';
import tyrant from './images/tyrant.jpg';

const images = [];
images.push(alpine);
images.push(breakoutArena);
images.push(coliseum);
images.push(eden);
images.push(empire);
images.push(fathom);
images.push(glacier);
images.push(mercy);
images.push(overgrowth);
images.push(parallax);
images.push(plaza);
images.push(regret);
images.push(riptide);
images.push(stasis);
images.push(theRig);
images.push(tidal);
images.push(torque);
images.push(truth);
images.push(tyrant);

const findImage = () => {
    const random = Math.floor(Math.random() * images.length);
    return images[random];
};

export default findImage;
