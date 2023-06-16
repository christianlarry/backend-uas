// DATA ARRAY OBJECT
const dataKopi = [
    {
        id: 0,
        namaKopi: 'Senja Amer',
        subNama: 'Americano',
        price: 20000,
        picture_url: 'images/kopi/americano-removebg.png'
    },
    {
        id: 1,
        namaKopi: 'Senja Latte',
        subNama: 'Caffe Latte',
        price: 25000,
        picture_url: 'images/kopi/senja-latte-removebg.png'
    },
    {
        id: 2,
        namaKopi: 'Senja Manis',
        subNama: 'Caramel Macchiato',
        price: 30000,
        picture_url: 'images/kopi/senja-manis-removebg.png'
    },
    {
        id: 3,
        namaKopi: 'Senja Pait',
        subNama: 'Espresso Macchiato',
        price: 20500,
        picture_url: 'images/kopi/senja-pait-removebg.png'
    },
    {
        id: 4,
        namaKopi: 'Senja Nilla',
        subNama: 'Vanilla Latte',
        price: 30000,
        picture_url: 'images/kopi/senja-nilla-removebg.png'
    },
    {
        id: 5,
        namaKopi: 'Senja Mocha',
        subNama: 'Caffe Mocha',
        price: 24500,
        picture_url: 'images/kopi/senja-mocha-removebg.png'
    },
    {
        id: 6,
        namaKopi: 'Senja Mocha Freeze',
        subNama: 'Iced Caffe Mocha',
        price: 27000,
        picture_url: 'images/kopi/senja-mocha-frezze-removebg.png'
    },
    {
        id: 7,
        namaKopi: 'Senjacino',
        subNama: 'Cappuccino',
        price: 30000,
        picture_url: 'images/kopi/senjacino-removebg.png'
    },
]

const menuItems = document.querySelectorAll('.order-menu-lists .list-item')

menuItems.forEach(function(item){
    item.addEventListener('click',(e)=>{
        // KETIKA BELUM ADA ITEM YANG DI ORDER/DATA PADA LOCAL STORAGE MASIH KOSONG MAKA ...
        if(!localStorage.getItem('data_order')){
            const orderItem = dataKopi[e.currentTarget.dataset.id]

            document.querySelector('.total-keranjang').textContent = 1
            
            localStorage.setItem('data_order',JSON.stringify([orderItem]))
            
            return document.getElementById('shopping-cart-btn').click()
        }

        // AMBIL DATA ORDER DARI LOCAL STORAGE DAN PARSE KEDALAM BENTUK ARRAY JSON
        const dataOrder = JSON.parse(localStorage.getItem('data_order'))

        dataOrder.push(dataKopi[e.currentTarget.dataset.id])

        // SIMPAN DATA ORDER DI DALAM LOCAL STORAGE
        localStorage.setItem('data_order',JSON.stringify(dataOrder))

        // SETIAP MENU DIPILIH DAN MASUK KE KERANJANG MAKA TAMPILAN TOTAL ITEM PADA KERANJANG PADA SUDUT KANAN ATAS HALAMAN AKAN BERUBAH
        document.querySelector('.total-keranjang').textContent = dataOrder.length
        
        // MEMBUKA HALAMAN KERANJANG SETIAP PILIH MENU
        document.getElementById('shopping-cart-btn').click()
    })
})

// MENGATUR TAMPILAN JUMLAH ITEM DI KERANJANG SETIAP REFRESH HALAMAN
const dataOrder = JSON.parse(localStorage.getItem('data_order'))

if(!dataOrder){ // KETIKA DATA ORDER TIDAK ADA
    document.querySelector('.total-keranjang').textContent = 0
}else{ // KETIKA DATA ORDER ADA
    const jumlahOrderPadaKeranjang = dataOrder.length
    document.querySelector('.total-keranjang').textContent = jumlahOrderPadaKeranjang
}

const shoppingCartBtn = document.getElementById('shopping-cart-btn')
const orderCloseBtn = document.getElementById('order-close-btn')

const keranjangModal = document.querySelector('.keranjang-order-modal')
const orderListsContainer = document.querySelector('.order-lists')
const totalHargaContainer = document.querySelector('.total-harga')

shoppingCartBtn.addEventListener('click',(e)=>{
    const orderItem = JSON.parse(localStorage.getItem('data_order'))

    keranjangModal.style.display = 'flex'
    if(!orderItem || orderItem.length == 0) return orderListsContainer.innerHTML = `<li>Belum ada pesanan</li>`

    let totalHarga = 0
    orderListsContainer.innerHTML = ''
    orderItem.forEach((value)=>{
        totalHarga += value.price
        orderListsContainer.innerHTML += `
        <li class="list-item">
            <div class="order-img-desc">
                <div class="order-gambar">
                    <img src="${value.picture_url}" alt="">
                </div>
                <div class="order-desc">
                    <span class="order-item-nama">${value.namaKopi}</span>
                    <span class="order-item-price">Rp.${value.price}</span>
                </div>
            </div>
        </li>
        `
    })
    totalHargaContainer.textContent = `Rp.${totalHarga}`
})

document.addEventListener('click',(e)=>{
    if(e.target == document.getElementById('order-btn')){
        const orderItem = JSON.parse(localStorage.getItem('data_order'))

        if(orderItem.length === 0) return alert('Tidak ada produk yang dipesan, Silahkan memesan terlebih dahulu')
    
        alert('Terima kasih sudah memesan produk dari Kopi Senja, Semoga kamu lebih enjoy menjalani keseharian bersama kopi senja, Kopinya anak muda!❤')
    
        localStorage.setItem('data_order',JSON.stringify([]))
        keranjangModal.style.display = 'none'
        document.querySelector('.total-keranjang').textContent = 0
    }

    if(e.target == document.getElementById('batal-btn')){
        const orderItem = JSON.parse(localStorage.getItem('data_order'))

        if(orderItem.length === 0) return alert('Belum ada pesanan')

        localStorage.setItem('data_order',JSON.stringify([]))
        keranjangModal.style.display = 'none'
        document.querySelector('.total-keranjang').textContent = 0
    }
})

orderCloseBtn.addEventListener('click',()=>{
    keranjangModal.style.display = 'none'
})