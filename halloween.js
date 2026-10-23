(() => {
  const gate = document.querySelector('#age-gate');
  let verified = false;
  try { verified = sessionStorage.getItem('kinkKorpsAgeVerified') === 'true'; } catch {}
  if (!verified) gate.showModal();
  gate.addEventListener('cancel', event => event.preventDefault());
  document.querySelector('#age-enter').addEventListener('click', () => {
    try { sessionStorage.setItem('kinkKorpsAgeVerified', 'true'); } catch {}
    gate.close();
    document.querySelector('#main').focus({preventScroll:true});
  });
  document.querySelector('#age-exit').addEventListener('click', () => { window.location.href = 'about:blank'; });

  const cutoff = Date.parse('2026-10-23T19:00:00-04:00');
  function updateTickets() {
    const door = Date.now() >= cutoff;
    document.querySelector('#payment-area').hidden = door;
    document.querySelector('#door-area').hidden = !door;
    document.querySelector('#ticket-status').textContent = door ? 'Presale closed · $20 at the door' : 'Presale ends at 7 PM Friday, October 23 (Eastern).';
    document.querySelector('[data-ticket-note]').textContent = door ? 'Presale has ended. $20 at the door.' : 'Presale until 7 PM Eastern Friday. Include your name + email.';
    document.querySelector('#mobile-label').textContent = door ? '$20 at the door · Details' : 'Get tickets · $15 presale';
    document.body.dataset.ticketState = door ? 'door' : 'presale';
  }
  updateTickets();
  setInterval(updateTickets, 30000);
  document.addEventListener('visibilitychange', updateTickets);
  document.querySelector('#copy-zelle').addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText('832-387-3426');
      status.textContent = 'Zelle number copied: 832-387-3426. Include your name and email in the payment note.';
    } catch {
      status.textContent = 'Zelle number: 832-387-3426. Select and copy this number.';
    }
  });
})();
