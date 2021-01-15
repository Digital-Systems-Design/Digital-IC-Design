----------------------------------------------------------------------------------
-- Company: Goodix Technology Inc.
-- Engineer: Hisham Elreedy
-- 
-- Create Date: 12/27/2020 07:39:57 PM
-- Design Name: Testbench for Complex Multiplier
-- Module Name: TB - Behavioral
-- Project Name: 
-- Target Devices: 
-- Tool Versions: 
-- Description: 
-- 
-- Dependencies: 
-- 
-- Revision:
-- Revision 0.01 - File Created
-- Additional Comments:
-- 
----------------------------------------------------------------------------------


library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.NUMERIC_STD.ALL;
-- Uncomment the following library declaration if using
-- arithmetic functions with Signed or Unsigned values
--use IEEE.NUMERIC_STD.ALL;

-- Uncomment the following library declaration if instantiating
-- any Xilinx leaf cells in this code.
--library UNISIM;
--use UNISIM.VComponents.all;

entity TB is
--  Port ( );
end TB;

architecture Behavioral of TB is

signal Ar,Ai,Br,Bi: std_logic_vector(2 downto 0);
signal Rr,Ri: std_logic_vector(6 downto 0);

component complexmul
port(
Ai,Ar,Bi,Br :in std_logic_vector (2 downto 0);
Ri,Rr :out std_logic_vector (6 downto 0)
);
end component;

begin
uut:complexmul port map(
Ar => Ar,
Ai => Ai,
Br => Br,
Bi => Bi,
Rr => Rr,
Ri => Ri
);

PROCESS
begin

Ar<="111";
Ai<="111";
Br<="111";
Bi<="111";
wait for 10 ns;

Ar<="101";
Ai<="000";
Br<="101";
Bi<="000";
wait for 10 ns;

Ar<="000";
Ai<="111";
Br<="000";
Bi<="111";

Ar<="111";
Ai<="000";
Br<="000";
Bi<="111";
wait for 10 ns;

Ar<="000";
Ai<="111";
Br<="111";
Bi<="000";
wait for 10 ns;

Ar<="010";
Ai<="011";
Br<="100";
Bi<="101";
wait for 10 ns;

wait;

end process;
end Behavioral;

