import React, { useState } from 'react';

const formatRupiah = (value: string): string => {
  if (!value) return '';
  const number = value.replace(/\D/g, '');
  return 'Rp ' + Number(number).toLocaleString('id-ID');
};

const parseRupiah = (value: string): number => {
  const number = value.replace(/\D/g, '');
  return Number(number || 0);
};

const Soal3 = () => {
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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === 'harga') {
      setFormData((prev) => ({
        ...prev,
        [name]: formatRupiah(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!/^[a-zA-Z0-9 ]+$/.test(formData.judul)) {
      newErrors.judul = 'Judul hanya boleh huruf dan angka (tanpa simbol).';
    } else if (formData.judul.length > 16) {
      newErrors.judul = 'Judul maksimal 16 karakter.';
    }

    const hargaNumber = parseRupiah(formData.harga);
    if (isNaN(hargaNumber) || hargaNumber === 0) {
      newErrors.harga = 'Harga hanya boleh angka.';
    } else if (hargaNumber < 10000) {
      newErrors.harga = 'Harga minimal Rp 10.000.';
    } else if (hargaNumber > 1000000) {
      newErrors.harga = 'Harga maksimal Rp 1.000.000.';
    }

    if (!/^[a-zA-Z0-9 ]*$/.test(formData.deskripsi)) {
      newErrors.deskripsi =
        'Deskripsi hanya boleh huruf dan angka (tanpa simbol).';
    } else if (formData.deskripsi.length > 50) {
      newErrors.deskripsi = 'Deskripsi maksimal 50 karakter.';
    }

    if (formData.urlGambar.length > 100) {
      newErrors.urlGambar = 'URL Gambar maksimal 100 karakter.';
    } else if (!formData.urlGambar.startsWith('https://')) {
      newErrors.urlGambar = 'URL Gambar harus diawali dengan https://';
    }

    if (!/^[a-zA-Z0-9 ]+$/.test(formData.kategori)) {
      newErrors.kategori =
        'Kategori hanya boleh huruf dan angka (tanpa simbol).';
    } else if (formData.kategori.length > 20) {
      newErrors.kategori = 'Kategori maksimal 20 karakter.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.judul,
          price: parseRupiah(formData.harga),
          description: formData.deskripsi,
          image: formData.urlGambar,
          category: formData.kategori,
        }),
      });

      if (!res.ok) throw new Error('Gagal submit API');

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
      setErrors({});
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
      <form onSubmit={handleSubmit} className="w-full max-w-md  space-y-4">
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
            value={formData.judul}
            onChange={handleChange}
            placeholder="Contoh INV.XX"
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.judul && (
            <p className="text-red-500 text-sm">{errors.judul}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Harga</label>
          <input
            type="text"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
            placeholder="Rp 10.000"
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.harga && (
            <p className="text-red-500 text-sm">{errors.harga}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Deskripsi</label>
          <input
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            placeholder="Contoh INV.XX"
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>{formData.deskripsi.length}/50 karakter</span>
          </div>
          {errors.deskripsi && (
            <p className="text-red-500 text-sm">{errors.deskripsi}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-gray-700">
            URL Gambar
          </label>
          <input
            type="url"
            name="urlGambar"
            value={formData.urlGambar}
            onChange={handleChange}
            placeholder="https://contoh.com/gambar.jpg"
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.urlGambar && (
            <p className="text-red-500 text-sm">{errors.urlGambar}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Kategori</label>
          <input
            type="text"
            name="kategori"
            value={formData.kategori}
            onChange={handleChange}
            placeholder="Contoh Elektronik"
            className="w-full border border-blue-500 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          {errors.kategori && (
            <p className="text-red-500 text-sm">{errors.kategori}</p>
          )}
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

export default Soal3;
