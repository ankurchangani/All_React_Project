import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const user = true;
  return (
    <nav className="py-4 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.jpeg" alt="logo" className="h-16" />
      </Link>

      <div>
        {!user ? (
          <Button onClick={() => navigate("/auth")} className="cursor-pointer">
            Login
          </Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>PA</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Ankur Changani</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>My Links</DropdownMenuItem>
              <DropdownMenuItem className= "text-red-400">
                Logout
                <LogOut className="mr-2 "/>
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Header;
