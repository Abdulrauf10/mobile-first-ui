import React, { useState } from 'react';

const Soal2 = () => {
  const [formData, setFormData] = useState({
    judul: '',
    harga: '',
    deskripsi: '',
    urlGambar: '',
    kategori: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.judul,
          price: parseFloat(formData.harga),
          description: formData.deskripsi,
          image: formData.urlGambar,
          category: formData.kategori,
        }),
      });

      if (!res.ok) throw new Error('Failed to submit');

      const data = await res.json();
      console.log('API response:', data);

      setMessage({ type: 'success', text: 'Produk berhasil ditambahkan!' });
      setFormData({
        judul: '',
        harga: '',
        deskripsi: '',
        urlGambar: '',
        kategori: '',
      });
    } catch (err) {
      console.error(err);
      setMessage({
        type: 'error',
        text: 'Gagal menambahkan produk. Coba lagi.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        {message && (
          <div
            className={`p-3 rounded text-center font-medium ${
              message.type === 'success'
                ? 'bg-green-100 text-green-700 border border-green-300'
                : 'bg-red-100 text-red-700 border border-red-300'
            }`}
          >
            {message.text}
          </div>
        )}

        <div>
          <label className="block font-semibold text-gray-700">Judul</label>
          <input
            type="text"
            name="judul"
            placeholder="Contoh INV.XX"
            value={formData.judul}
            onChange={handleChange}
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Harga</label>
          <input
            type="number"
            name="harga"
            placeholder="Contoh 10000"
            value={formData.harga}
            onChange={handleChange}
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Deskripsi</label>
          <input
            name="deskripsi"
            placeholder="Contoh INV.XX"
            value={formData.deskripsi}
            onChange={handleChange}
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">
            URL Gambar
          </label>
          <input
            type="url"
            name="urlGambar"
            placeholder="https://contoh.com/gambar.jpg"
            value={formData.urlGambar}
            onChange={handleChange}
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Kategori</label>
          <input
            type="text"
            name="kategori"
            placeholder="Contoh Elektronik"
            value={formData.kategori}
            onChange={handleChange}
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Mengirim...' : 'Tambahkan'}
        </button>
      </form>
    </div>
  );
};

export default Soal2;
