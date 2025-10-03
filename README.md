# MADA Suite (Promotor · Supervisor · Dirección)

Stack:
- Firebase Hosting
- Firebase Auth (Email/Password)
- Firestore (datos)
- Firebase Storage (evidencias)
- Cloud Functions (API WhatsApp, nómina, alertas)
- TailwindCSS (CDN)

## Requisitos
- Node 18+
- Firebase CLI (`npm i -g firebase-tools`)
- Cuenta Firebase (paga si usarás Twilio WhatsApp o funciones con gran volumen)

## Configuración
1. `firebase login`
2. `firebase init` (Hosting, Functions, Firestore) o usa los archivos incluidos.
3. En `hosting/js/firebase-config.js` pega tu `firebaseConfig` de Firebase.
4. En `functions/.env` agrega las credenciales si usarás **Twilio**:
