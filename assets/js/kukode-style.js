
/* ===== Responsive Sidepanel ====== */
/*

const sidePanelToggler 	= document.getElementById('sidepanel-toggler'); 
const sidePanel 		= document.getElementById('app-sidepanel');	
const sidePanelDrop 	= document.getElementById('sidepanel-drop'); 
const sidePanelClose 	= document.getElementById('sidepanel-close');

const topMenuArea 		= document.getElementById('top-menu-area');
const contentArea		= document.getElementById('content-area');
const footerArea		= document.getElementById('app-footer');

window.addEventListener('load', function(){
	responsiveSidePanel(); 
});

window.addEventListener('resize', function(){
	responsiveSidePanel(); 
});

function responsiveSidePanel() {
	let w = window.innerWidth;
	if(w >= 1200) {
		// if larger 
		//console.log('larger');
		sidePanel.classList.remove('sidepanel-hidden');
		sidePanel.classList.add('sidepanel-visible');

		topMenuArea.classList.remove('sidemenu-hidden');
		contentArea.classList.remove('sidemenu-hidden');
		footerArea.classList.remove('sidemenu-hidden');
		
	} else {
		// if smaller
		//console.log('smaller');
		sidePanel.classList.remove('sidepanel-visible');
		sidePanel.classList.add('sidepanel-hidden');

		topMenuArea.classList.add('sidemenu-hidden');
		contentArea.classList.add('sidemenu-hidden');
		footerArea.classList.add('sidemenu-hidden');
	}
};

*/