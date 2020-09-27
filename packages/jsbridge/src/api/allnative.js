import modalMixin from './native/modal';
import routerMix from './native/router';
import deviceMixin from './native/device';
import pageMixin from './native/page';
import navigatorMixin from './native/navigator';
import utilMixin from './native/util';
import downloadMixin from './native/download';
import telephonyMixin from './native/telephony';
import storageMixin from './native/storage';
import systemMixin from './native/system';
import networkMixin from './native/network';
import captureMixin from './native/capture';
import clipboardMixin from './native/clipboard';
import recordMixin from './native/record';
import packagesMixin from './native/packages';
import filepickerMixin from './native/filepicker';
import networkInfoMixin from './native/networkInfo';
import batteryMixin from './native/battery';
import networkDisabledMixin from './native/networkDisabled';
import networkEnabledMixin from './native/networkEnabled';
import fileManagerMixin from './native/fileManager';
import pathMixin from './native/path';
import imageMixin from './native/image';
import uploadMixin from './native/upload';
import audioMixin from './native/audio';
import brightnessInfoMixin from './native/brightnessInfo';
import vibratorMixin from './native/vibrateInfo';
import notificationMixin from './native/notification';
import databaseMixin from './native/database';
import qrcodeMixin from './native/qrcode';
import appMixin from './native/app';
import updateMixin from './native/update';

export default function allNative() {
    // 下载模块
    downloadMixin();
    modalMixin();
    routerMix();
    deviceMixin();
    pageMixin();
    navigatorMixin();
    utilMixin();
    telephonyMixin();
    storageMixin();
    systemMixin();
    networkMixin();
    captureMixin();
    clipboardMixin();
    recordMixin();
    networkInfoMixin();
    batteryMixin();
    networkDisabledMixin();
    networkEnabledMixin();
    filepickerMixin();
    fileManagerMixin();
<<<<<<< HEAD
    packageMixin();
=======
    packagesMixin();
>>>>>>> syber/master
    pathMixin();
    filepickerMixin();
    imageMixin();
    uploadMixin();
    audioMixin();
    brightnessInfoMixin();
    vibratorMixin();
    notificationMixin();
    databaseMixin();
    qrcodeMixin();
    appMixin();
    updateMixin();
}