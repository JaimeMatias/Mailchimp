'use client';

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { useRouter } from 'next/navigation';


// Configura las credenciales de AWS SES
const sesClient = new SESClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'ASIAQTBWTTAUX3GILDMK',
    secretAccessKey: 'hfdLjIPB+jy/HBjFrTE8AhgD+Ib+Q4UzX1Fos0x5',
    sessionToken:
      'IQoJb3JpZ2luX2VjEK7//////////wEaCXVzLWVhc3QtMSJHMEUCIQCB3EzX1/CVlsoHYgs8fFzQKZPSYYMp9rXHcwDCaHOhWQIgL9us3jbknG3ZWi29KFuqqnGQf/G+SPB0UbHW9XGDEuoq8wIIp///////////ARABGgwwNDA5MTY3MTk2NTciDMETePAVtZW18+i6rirHAs4pagHWanHH8jpq9i4GoqsWqVO1DVOGg+svgLk+VXpP2kpZRBIbN4zUjGuTfqkdcU3SL0M9z4OqRTdl3wxzRapJmJLO0J/M1EsaFhXG7tm9OAAle2y59pH+RYoGpAhLXhT1EyNVchifGsEpcpBhZji5jJScMMMSvgQBqykFajw0liX+ZndZ0m5tyXal+LACRq9NaO+YczlKVbF0c1NfqVoiPz6+6A8HuR14p4WbUXvxnz2cNbF01bYFxDgineIV54Iy6hgRyXXYeLobP4Jyjs2V+GJQ3PxT53KgsnhLKlrYnNmM0CwZkqJyTtDkn3vOd4RbQRXahlQY3tmQTMSUKUW1u2Li1h2k+NivO6OCaDdF7EAWPQLLfYd3jdblIRwasNqaND/ssjOeQhl+mRvv2kcTntuvwLlP3O9JayweKtKFZVW6asr6zTC/5KGvBjqnAYlK23NUBLonR1RrKh3Q4tRyVrNBQ4qhYZ5fMJOPdGWUwthtC9dCMiHV9hMb03cdLV0e1aziUzKzLsdnXB3QanrUYjB1k60xTC03RLdbCb1Fra1FHwI2+AnCSMl3YC4QoSI4od6bwQZU6nJnONr8WZWa60r3JpmvVhiTpYltlym8ggDJX/5n+rW6GFAosLeeHt6BNYaeKK1IYKJH5tzn4KAPH3hqSDZb'
  }
});

// Función para enviar un correo electrónico
export const sendEmail = async (name: any, email: any) => {
  const params = {
    Destination: {
      ToAddresses: ['mjaime@kelsus.com']
    },
    Message: {
      Body: {
        Text: {
          Data: `${name} has submitted the form with email: ${email}`
        }
      },
      Subject: {
        Data: 'New Submssion from Developer Subscription Form'
      }
    },
    Source: 'Notification@dev.kelsus.com'
  };

  try {
    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);
    console.log('Email enviado:', result);
    return result;
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    throw error;
  }
};

export default function SignUpForm() {
  const router = useRouter();

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = event.currentTarget.fullName.value;
    const email = event.currentTarget.email.value;
    console.log(`name: ${name}`);
    console.log(`username: ${email}`);
    await sendEmail(name, email);
  };

  return (
    <>
      <form onSubmit={handleSignUp} className="mx-auto flex flex-col justify-center">
        <label htmlFor="fullName" className="mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="fullName"
          
          autoComplete="off"
          className="mb-2 rounded-lg border border-gray-600 bg-black p-2.5 text-center text-sm text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500"
        />
        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          
          autoComplete="off"
          className="mb-2 rounded-lg border border-gray-600 bg-black p-2.5 text-center text-sm text-white placeholder-gray-400 focus:border-pink-500 focus:outline-none focus:ring-pink-500"
        />
        <div className="my-4">
          <button type="submit">SIGN UP</button>
        </div>
      </form>
    </>
  );
}
