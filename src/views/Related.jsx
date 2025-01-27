import Confetti from 'react-confetti'

export default function Related() {
  return (
    <div className="p-4">
      <p className="mb-2">Sekian petualangan di website ini. Semoga terhibur</p>
      <blockquote className="border-l-2 pl-6 text-2xl italic mb-6 font-covered-by-your-grace">
        Namun percayalah untukmu, kujual dunia
      </blockquote>
      <h2 className="font-bold">Ada juga buatan lain dari kreator</h2>
      <ul className="list-disc ml-4 text-sm mb-4">
        <li>
          <a className="underline text-blue-600" href="https://portfolio-sucikeivam.netlify.app/" target="blank_">https://portfolio-sucikeivam.netlify.app/</a>
        </li>
        <li>
          <a className="underline text-blue-600" href="https://permintaan-maaf-untuk-sucikeivam.netlify.app/" target="blank_">https://permintaan-maaf-untuk-sucikeivam.netlify.app/</a>
        </li>
        <li>
          <a className="underline text-blue-600" href="https://suci-keiva-mulyana.netlify.app/" target="blank_">https://suci-keiva-mulyana.netlify.app/</a>
        </li>
        <li>
          <a className="underline text-blue-600" href="https://sucikeivamgpt.onrender.com" target="blank_">https://sucikeivamgpt.onrender.com</a>
        </li>
      </ul>
      <p>Terimakasih telah sampai sini</p>
      <Confetti />
    </div> 
  )
}
