# Set up JAWS and NVDA screen readers for Mac

The goal of this document is to help Mac users get a virtual machine set up with Windows and the JAWS and NVDA screen readers for testing purposes. After you go through this set up document you should being able to test in both JAWS and NVDA in a Windows environment.

## Install VirtualBox and Your Virtual Machine

1. Download [VirtualBox](https://www.virtualbox.org/)
1. Download [Microsoft Windows virtual machine](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)
  1. Select your virtual machine preference (IE11 on Win7)
  1. Select your platform (VirtualBox)
1. Install VirtualBox - if you run into permissions issues installing [check this](https://matthewpalmer.net/blog/2017/12/10/install-virtualbox-mac-high-sierra/index.html)
1. Unzip the Microsoft Virtual machine you downloaded
1. Start VirtualBox
  1. File -> Import... select ovf file
1. Run the Microsoft Windows virtual machine
1. Yay! You now have IE11 on Win7 running on your Mac!

## Now that your virtual machine is running let's install JAWS

**Note** JAWS will only run for 40 minutes unless you register the application.

1. Open up Internet Explorer on your virtual machine
1. [Download and install the latest version of JAWS](https://support.freedomscientific.com/Downloads/JAWS)
1. Restart your virtual machine

**Pro JAWS tip** [NVDA keyboard shortcuts](https://webaim.org/resources/shortcuts/jaws)

## Let's install Firefox and NVDA next

1. Open up Internet Explorer on your Windows virtual machine
1. [Download Firefox on your virtual machine](https://www.mozilla.org/en-US/firefox/)
1. [Download NVDA screen reader](https://www.nvaccess.org/download/)
1. Restart your virtual machine

**Pro NVDA tip** [NVDA keyboard shortcuts](https://webaim.org/resources/shortcuts/nvda)
