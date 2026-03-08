# Configuration EmailJS pour l'envoi de messages

## Étapes pour configurer EmailJS

1. **Créer un compte EmailJS**
   - Allez sur https://www.emailjs.com/
   - Créez un compte gratuit (200 emails/mois)

2. **Créer un service email**
   - Dans le dashboard EmailJS, allez dans "Email Services"
   - Cliquez sur "Add New Service"
   - Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
   - Connectez votre compte email (malickrafick456@gmail.com)
   - Notez le **Service ID** généré

3. **Créer un template email**
   - Allez dans "Email Templates"
   - Cliquez sur "Create New Template"
   - Utilisez ce template :
     ```
     De: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```
   - Dans "To Email", mettez: `malickrafick456@gmail.com`
   - Notez le **Template ID** généré

4. **Obtenir votre Public Key**
   - Allez dans "Account" > "General"
   - Copiez votre **Public Key**

5. **Configurer dans le code**
   - Ouvrez `src/components/Contact.jsx`
   - Remplacez les valeurs suivantes :
     - `YOUR_SERVICE_ID` par votre Service ID
     - `YOUR_TEMPLATE_ID` par votre Template ID
     - `YOUR_PUBLIC_KEY` par votre Public Key

## Alternative : Utiliser des variables d'environnement

Pour plus de sécurité, vous pouvez utiliser des variables d'environnement :

1. Créez un fichier `.env` à la racine du projet :
   ```
   VITE_EMAILJS_SERVICE_ID=votre_service_id
   VITE_EMAILJS_TEMPLATE_ID=votre_template_id
   VITE_EMAILJS_PUBLIC_KEY=votre_public_key
   ```

2. Modifiez `Contact.jsx` pour utiliser ces variables :
   ```javascript
   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
   const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
   const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   ```

