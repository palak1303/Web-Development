const Listing = require("../models/listing.js");

module.exports.index = async( req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
};

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.showListing = async(req, res,next)=>{
    let {id} = req.params;
    const listing =await Listing.findById(id)
    .populate({
        path:"reviews",
        populate:{
        path:"author"
       },
    })
    .populate("owner");
    if( !listing){
        req.flash("error","Listing you requested for does not existed");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing});
}

module.exports.createListing = async(req,res,next)=>{
    let url = req.file.path;
    let filename = req.file.filename;
    // console.log(url,"...",filename);
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url , filename};
    await newListing.save();
    req.flash("success","New Listing created");
    res.redirect("/listings");
};

module.exports.renderEditForm = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if( !listing){
        req.flash("error","Listing you requested for does not existed");
        res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl =originalImageUrl.replace("/upload" , "/upload/,w_200")
    res.render("listings/update.ejs",{listing,originalImageUrl});
};

module.exports.updateListing = async(req,res)=>{
    let{id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing} );

    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url,filename};
    await listing.save();
    }
    req.flash("success","Listing Updated!");
    res.redirect("/listings");
};

module.exports.destroyListing = async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
};