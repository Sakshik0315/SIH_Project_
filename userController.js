exports.searchAlumni = async (req, res) => {
    const { field, location, graduationYear } = req.query;
  
    const filter = {
      role: 'Alumni',
      ...(field && { field }),
      ...(location && { location }),
      ...(graduationYear && { graduationYear }),
    };
  
    try {
      const alumni = await User.find(filter);
      res.json(alumni);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  