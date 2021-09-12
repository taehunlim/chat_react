import { minWidth } from '../../utils/minWidth';

const deviceSize = {
    desktop: '1280px',
    laptop: '1024px',
    tablet: '768px',
    mobile: '480px',
};

const device = {
    desktop: `@media (min-width: ${minWidth(deviceSize.laptop)})`,
    laptop: `@media (min-width: ${minWidth(deviceSize.tablet)}) and (max-width: ${deviceSize.laptop})`,
    tablet: `@media (min-width: ${minWidth(deviceSize.mobile)}) and (max-width: ${deviceSize.tablet})`,
    mobile: `@media (max-width: ${deviceSize.mobile})`
};

const bgColor = {
    lightMode: 'white',
    darkMode: '#232323'
};

const fontColor = {
    lightMode: 'black',
    darkMode: '#dfdfdf'
};

const theme = {
    deviceSize,
    device,
    bgColor,
    fontColor
};

export default theme;