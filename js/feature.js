document.getElementById('add-money-main-btn').addEventListener('click', function () {
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('add-money-from').classList.remove('hidden')
    // active button
    document.getElementById('add-money-main-btn').classList.add('bg-blue-500', 'text-white');

    document.getElementById('cash-out-main-btn').classList.remove('bg-blue-500', 'text-white');


})
document.getElementById('cash-out-main-btn').addEventListener('click', function () {
    document.getElementById('cash-out-from').classList.remove('hidden');
    document.getElementById('add-money-from').classList.add('hidden');
    // active button
    document.getElementById('cash-out-main-btn').classList.add('bg-blue-500', 'text-white');
    document.getElementById('add-money-main-btn').classList.remove('bg-blue-500', 'text-white')



})