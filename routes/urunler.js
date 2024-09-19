import express from 'express';
import {
    listerfunction,
    listerfunctionCivata,
    listerfunctionHirdavat,
    listerfunctionElAletleri,
    listerfunctionElektrikliAletler,
    listerfunctionIsGuvenligi,
    listerfunctionCelikHalatVeEkipman,
    listerfunctionKaynakMakinesi,
    listerfunctionTeker,
    listerfunctionYapiştiriciVeKimyasallarBoyalar,
    listerfunctionTakimÇantasiVEAvadanlikGrubu,
    listerfunctionMerdivenVeIskele,
    listerfunctionTaşVeZımpara,
    listerfunctionMatkapUcuVeBitsGrubu
} from '../controllers/urunList.js';
const router = express.Router();

// Ürünler sayfası rotası
router.get('/', listerfunction);
router.get('/Civata', listerfunctionCivata);
router.get('/Hirdavat', listerfunctionHirdavat);
router.get('/ElAletleri', listerfunctionElAletleri);
router.get('/ElektrikliAletler', listerfunctionElektrikliAletler);
router.get('/IsGuvenligi', listerfunctionIsGuvenligi);
router.get('/HalatVeEkipman', listerfunctionCelikHalatVeEkipman);
router.get('/KaynakMakinesi', listerfunctionKaynakMakinesi);
router.get('/Teker', listerfunctionTeker);
router.get('/YapistiriciVeKimyasallarBoyalar', listerfunctionYapiştiriciVeKimyasallarBoyalar);
router.get('/TakimCantasiVeAvadanlikGrubu', listerfunctionTakimÇantasiVEAvadanlikGrubu);
router.get('/MerdivenVeIskele', listerfunctionMerdivenVeIskele);
router.get('/TasVeZimpara', listerfunctionTaşVeZımpara);
router.get('/MatkapUcuVeBitsGrubu', listerfunctionMatkapUcuVeBitsGrubu);

export default router;