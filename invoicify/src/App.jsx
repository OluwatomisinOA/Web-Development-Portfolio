import './App.css';
import React, { useState } from 'react';

export default function App() {

  const [invoice, setInvoice] = useState({
    invoiceNumber: 'INV-2024-001',
    date: new Date().toISOString().split('T')[0],
    senderName: 'Nexus Design Studio',
    senderEmail: 'hello@nexus.studio',
    recipientName: '',
    recipientEmail: '',
    recipientAddress: '',
    items: [
      {
        id: 1,
        description: 'Website Design',
        quantity: 1,
        price: 500.00
      }
    ],
    taxRate: 10,
    currency: "$"
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice(prev => ({
      ...prev,          
      [name]: value     
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    setInvoice((prev) => {
      const newItems = [...prev.items];
      if (name === 'price' || name === 'quantity') {
        newItems[index][name] = parseFloat(value) || 0;
      } else {
        newItems[index][name] = value;
      }
      return { ...prev, items: newItems };
    });
  };

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      description: "",
      quantity: 1,
      price: 0
    };
    setInvoice((prev) => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };
  
  const deleteItem = (id) => {
    setInvoice((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id)
    }))
  };

  const handleNew = () => {
    if (!window.confirm("Start a new invoice? Unsaved changes will be lost.")) return;
    setInvoice({
      invoiceNumber: `INV-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      senderName: '',
      senderEmail: '',
      recipientName: '',
      recipientEmail: '',
      recipientAddress: '',
      items: [{ id: Date.now(), description: "", quantity: 1, price: 0 }],
      taxRate: 10,
      currency: "$"
    });
    setErrors({});
  };

  // --- 3. LOGIC & MATH ---
  const subtotal = invoice.items.reduce((sum, item) => {
    return sum + (item.quantity * item.price);
  }, 0);

  const taxAmount = subtotal * ((invoice.taxRate) / 100);
  const total = subtotal + taxAmount;

  const validateForm = () => {
    const newErrors = {};
    if (!invoice.invoiceNumber) newErrors.invoiceNumber = "Required";
    if (!invoice.senderName) newErrors.senderName = "Required";
    if (!invoice.recipientName) newErrors.recipientName = "Required";
    if (!invoice.recipientEmail) newErrors.recipientEmail = "Required";
    if (!invoice.date) newErrors.date = "Required";
    
    if (invoice.items.length === 0) {
      alert("Add at least one item to the invoice.");
      return false;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleDownload() {
    if (!validateForm()) {
      alert("Please fill in all required fields.")
      return;
    };
    window.print();
  }

  return (
    <div className="flex h-screen w-full bg-slate-900 text-slate-100 overflow-hidden font-sans">
      
      {/* SIDEBAR  */}
      <aside className="w-20 bg-slate-950 border-r border-slate-800 hidden md:flex flex-col items-center py-8 gap-6 z-20 print:hidden h-full md:relative fixed">
        <div className="w-10 h-10 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20 mb-8 flex items-center justify-center">
          <span className='font-bold text-white text-lg'>N</span>
        </div>

        <nav className='flex-1 flex flex-col gap-6 w-full px-4'>
          <button
            onClick={handleNew}
            className='w-full aspect-square rounded-xl bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all flex flex-col items-center justify-center gap-1 group px-2 mb-4'
            title='Create New Invoice'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 group-hover:scale-110 transition-transform'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M 12 4.5v15m7.5-7.5h-15'/>
            </svg>
            <span className='text-[10px] font-medium'>New</span>
          </button>
        </nav>

        <div className="mt-auto">
          <img
            src={`https://ui-avatars.com/api?name=${invoice.senderName || 'User'}&background=0D8ABC&color=fff`}
            alt='User'
            className='w-8 h-8 rounded-full border border-slate-600'
          />
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 h-full">
        
        {/* EDITOR */}
        <section className="h-full overflow-y-auto p-8 border-r border-slate-800 print:hidden scrollbar-thin scrollbar-thumb-slate-700">

          <header className='mb-8 flex flex-col text-slate-400 items-center justify-center'>
            <h1 className='tracking-wider uppercase font-bold text-4xl'>Invoicify</h1>
          </header>

          <div className='flex justify-between items-center mb-6'>
            <h2 className="text-xl font-bold text-white tracking-tight">Details</h2>
            <button className='bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all font-medium text-white' onClick={handleDownload}>Download PDF</button>
          </div>

          <div className='bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-8 grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-xs text-slate-400 mb-1'>Currency</label>
              <select
                name='currency'
                value={invoice.currency}
                onChange={handleChange}
                className='w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500'
              >
                <option value='$'>USD ($)</option>
                <option value='€'>EUR (€)</option>
                <option value='£'>GBP (£)</option>
                <option value='₦'>NGN (₦)</option>
              </select>
            </div>
            <div>
              <label className='block text-xs text-slate-400 mb-1'>Tax Rate (%)</label>
              <input 
                type='number'
                name='taxRate'
                value={invoice.taxRate}
                onChange={handleChange}
                className='w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500'
            />
            </div>
          </div>
          
          <div className="space-y-6 max-w-lg">
            
            {/* Invoice Meta */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Invoice No.
                  {errors.invoiceNumber && <span className='text-red-400 ml-2 text-[10px]'>*</span>}
                </label>
                <input 
                  type="text" 
                  name="invoiceNumber"
                  value={invoice.invoiceNumber}
                  onChange={handleChange}
                  className={`w-full bg-slate-800 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.invoiceNumber ? 'border-red-500' : 'border-slate-700'}`}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Issue Date
                  {errors.date && <span className='text-red-400 ml-2 text-[10px]'>*</span>}
                </label>
                <input 
                  type="date" 
                  name="date"
                  value={invoice.date}
                  onChange={handleChange}
                  className={`w-full bg-slate-800 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-300 ${errors.date ? 'border-red-500' : 'border-slate-700'}`}
                />
              </div>
            </div>

            {/* Sender Info */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                From (Your Company)
                {errors.senderName && <span className='text-red-400 ml-2 text-[10px]'>*</span>}
              </label>
              <input 
                type="text" 
                name="senderName"
                value={invoice.senderName}
                onChange={handleChange}
                className={`w-full bg-slate-800 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.senderName ? 'border-red-500' : 'border-slate-700'}`}
              />
            </div>

            {/* Recipient Info */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Bill To (Client) {errors.recipientName && <span className='text-red-400 ml-2'>*</span>}</label>
                <input
                  type='text'
                  name='recipientName'
                  value={invoice.recipientName}
                  onChange={handleChange}
                  placeholder="Client Name"
                  className={`w-full bg-slate-800 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-300 ${errors.recipientName ? 'border-red-500' : 'border-slate-700'}`}
                />
              </div>
              
              <div>
                <input
                  type='email'
                  name='recipientEmail'
                  value={invoice.recipientEmail}
                  onChange={handleChange}
                  placeholder="Client Email"
                  className={`w-full bg-slate-800 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-300 ${errors.recipientEmail ? 'border-red-500' : 'border-slate-700'}`}
                />
              </div>

              <div>
                <input
                  type='text'
                  name='recipientAddress'
                  value={invoice.recipientAddress}
                  onChange={handleChange}
                  placeholder="Client Address"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

          </div>

          <div className='mt-12'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='font-bold text-white'>Items</h3>
              <button onClick={addItem} className='text-xs bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-3 py-1.5 rounded-md transition-colors'>+ Add Item</button>
            </div>

            <table className='w-full text-left text-sm text-slate-400'>
              <thead>
                <tr className='border-b border-slate-700 text-xs uppercase tracking-wider'>
                  <th className='py-2 pl-2'>Description</th>
                  <th className='py-2 w-16 text-right'>Qty</th>
                  <th className='py-2 w-24 text-right'>Price</th>
                  <th className='py-2 w-8'></th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-800'>
                {invoice.items.map((item, index) => (
                  <tr key={item.id} className='group hover:bg-slate-800/50 transition-colors'>
                    <td className='py-2 pl-2'>
                      <input
                        type='text'
                        name='description'
                        value={item.description}
                        onChange={(e) => handleItemChange(index, e)}
                        placeholder='Item description'
                        className='w-full bg-transparent text-slate-200 placeholder-slate-600 focus:outline-none focus:text-blue-400'
                      />
                    </td>

                    <td className='py-2'>
                      <input
                        type='number'
                        name='quantity'
                        value={item.quantity}
                        onChange={(e) => handleItemChange(index, e)}
                        className='w-full bg-transparent text-slate-200 focus:outline-none focus:text-blue-400 text-right'
                      />
                    </td>

                    <td className='py-2'>
                      <input
                        type='number'
                        name='price'
                        value={item.price}
                        onChange={(e) => handleItemChange(index, e)}
                        className='w-full bg-transparent text-slate-200 focus:outline-none focus:text-blue-400 text-right'
                      />
                    </td>

                    <td className='py-2 text-right pr-2'>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className='text-slate-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all'
                        title='Delete Item'>
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* PREVIEW */}
        <section className="h-full bg-slate-200 overflow-y-auto p-8 flex flex-col items-center print:absolute print:top-0 print:left-0 print:w-full print:h-full print:bg-white print:p-0 print:overflow-visible">
          
          {/* A4 Paper */}
          <div className="bg-white shadow-2xl w-full max-w-[210mm] min-h-[297mm] rounded-sm text-slate-900 p-12 relative transition-all print:shadow-none print:m-0">
             
             {/* Header Section */}
             <div className="flex justify-between items-start mb-12">
                <div>
                   <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Invoice</h1>
                   <p className="text-slate-500 font-mono text-sm">#{invoice.invoiceNumber}</p>
                </div>
                <div className="text-right">
                   <h3 className="font-bold text-lg text-slate-800">{invoice.senderName}</h3>
                   <p className="text-slate-500 text-sm">{invoice.senderEmail}</p>
                   <p className="text-slate-500 text-sm mt-1">Date: {invoice.date}</p>
                </div>
            </div>
            
            <div className='flex justify-between mb-12'>
              <div className="w-1/2">
                <h2 className='text-xs font-bold text-slate-400 uppercase tracking-wider mb-2'>Bill To</h2>
                <div className="text-slate-900">
                  <p className='font-bold text-lg'>{invoice.recipientName || 'Client Name'}</p>
                  <p className='text-slate-500 text-sm whitespace-pre-line'>{invoice.recipientAddress || 'Client Address'}</p>
                  <p className='text-slate-500 text-sm mt-1'>{invoice.recipientEmail}</p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-slate-100 my-2"></div>

            <div className='mt-8'>
              <table className='w-full text-left mb-8'>
                <thead>
                  <tr className='border-b border-slate-200 text-xs font-bold text-slate-400 uppercase tracking-wider'>
                    <th className="pb-3">Description</th>
                    <th className='pb-3 text-right'>Qty</th>
                    <th className='pb-3 text-right'>Price</th>
                    <th className='pb-3 text-right'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item) => (
                    <tr key={item.id} className='border-b border-slate-50 text-sm'>
                      <td className='py-4 text-slate-700 font-medium'>{item.description}</td>
                      <td className='py-4 text-right text-slate-500'>{item.quantity}</td>
                      <td className='py-4 text-right text-slate-500'>{invoice.currency}{item.price.toFixed(2)}</td>
                      <td className='py-4 text-right text-slate-700 font-bold'>{invoice.currency}{(item.quantity * item.price).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>   

            <div className='flex justify-end mt-12'>
              <div className='w-64'>

                <div className='flex justify-between mb-3 text-slate-500 text-sm'>
                  <span>Subtotal</span>
                  <span>{invoice.currency}{subtotal.toFixed(2)}</span>
                </div>

                <div className='flex justify-between mb-3 text-slate-500 text-sm'>
                  <span>Tax ({invoice.taxRate}%)</span>
                  <span>{invoice.currency}{taxAmount.toFixed(2)}</span>
                </div>

                <div className='flex justify-between border-t-2 border-slate-900 pt-4 font-bold text-slate-900 text-xl'>
                  <span>Total</span>
                  <span>{invoice.currency}{total.toFixed(2)}</span>
                </div>

              </div>
            </div>
            
            {/* Footer */}
            <div className="absolute bottom-12 left-12 right-12 text-center">
               <p className="text-slate-400 text-xs">Thank you for your business.</p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}