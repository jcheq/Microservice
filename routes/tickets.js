// routes/tickets.js
const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');
const auth = require('../middleware/auth');

// Create a new ticket
router.post('/', auth, async (req, res) => {
  const { title, description } = req.body;
  try {

    console.log("New Ticket");
    const newTicket = new Ticket({
      title,
      description,
      createdBy: req.user_id,
      
    });

    console.log("New Ticket" + newTicket);
    const ticket = await newTicket.save();
    res.json(ticket);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update a ticket
router.put('/:id', auth, async (req, res) => {
  const { title, description, status, assignedTo } = req.body;
  try {
    let ticket = await Ticket.findById(req.params.id);
    
    if (!ticket) return res.status(404).json({ msg: 'Ticket not found' });

    ticket = await Ticket.findByIdAndUpdate(req.params.id, {
      title,
      description,
      status,
      assignedTo,
    }, { new: true });
    res.json(ticket);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all tickets
router.get('/', auth, async (req, res) => {
  try {
    const tickets = await Ticket.find().populate('createdBy assignedTo', 'name email');
    res.json(tickets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//Delete a ticket

router.delete('/:id', auth, async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);

        if (!ticket) return res.status(404).json({ msg: 'Ticket not found' });

        if (ticket.user_id !== req.user_id && req.user.role !== 'admin') {
            return res.status(401).json({ msg: 'User not authorized' });
        } 
        await ticket.collection.deleteOne();
        return res.status(401).json({ msg: 'Ticket deleted' });
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
});





module.exports = router;
